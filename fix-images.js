const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.jsx');
let fixedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  const imageRegex = /<Image([\s\S]*?)>/g;
  content = content.replace(imageRegex, (match, p1) => {
    if (p1.includes('fill') && !p1.includes('sizes=')) {
      return `<Image${p1} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    fixedFiles++;
  }
});

console.log('Fixed sizes on ' + fixedFiles + ' files.');
