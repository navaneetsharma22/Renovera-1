const baseProjectData = {
  heroImage: "/images/luxury-dusk-villa.png",
  overview: {
    heading: "A Masterpiece of Modern Architecture.",
    paragraphs: [
      "The client approached Renovera with a unique vision: to transform a dated, compartmentalized property into an expansive, light-filled sanctuary that blurs the lines between indoor and outdoor living.",
      "Our architectural team completely reimagined the floor plan, removing heavy structural barriers and introducing massive floor-to-ceiling glazing to capture the surrounding landscape."
    ],
    image: "/images/project-1.png",
  },
  info: {
    leadArchitect: "Sarah Jenkins, AIA",
    interiorDesigner: "Marcus Chen",
    constructionTeam: "Renovera Master Builders",
    completionDate: "October 2025"
  },
  clientVision: {
    lifestyle: "A bustling family of four who frequently host large gatherings and required a space that could transition seamlessly from intimate family evenings to grand entertaining.",
    aesthetic: "Minimalist yet warm. A preference for natural materials, neutral palettes, and unobstructed sightlines.",
    goals: [
      "Maximize natural light throughout the primary living spaces",
      "Create a seamless flow to the outdoor pool and entertainment area",
      "Incorporate discrete smart home technology",
      "Build a professional-grade chef's kitchen"
    ],
    image: "/images/project-2.png"
  },
  challenges: [
    { icon: "Layers", title: "Structural Constraints", description: "Removing central load-bearing walls required complex steel beam integration without lowering ceiling heights." },
    { icon: "MapPin", title: "Zoning Restrictions", description: "Strict historical preservation guidelines limited exterior modifications on the street-facing facade." },
    { icon: "Building2", title: "Natural Light", description: "The original footprint blocked southern exposure, necessitating entirely new window fenestrations." },
    { icon: "Hammer", title: "Material Availability", description: "Sourcing specific large-format Italian stone slabs required extensive international logistics." }
  ],
  designSolution: {
    concept: "We developed a concept we call 'The Floating Pavilion'. By introducing a massive cantilevered steel structure, we were able to open the entire rear facade.",
    paragraphs: [
      "The layout was reoriented to prioritize the southern exposure. The kitchen, dining, and main living areas were combined into one continuous 1,500 sq ft grand room.",
      "Custom millwork was used not just for storage, but as architectural dividers to subtly define spaces without breaking the open-concept feel."
    ],
    image: "/images/project-3.png"
  },
  process: [
    { step: "01", title: "Discovery", duration: "2 Weeks", desc: "Initial consultations, site surveys, and understanding the client's lifestyle needs." },
    { step: "02", title: "Planning", duration: "4 Weeks", desc: "Drafting structural blueprints and securing complex municipal zoning permits." },
    { step: "03", title: "Design Development", duration: "6 Weeks", desc: "Creating photorealistic 3D renders and selecting premium material finishes." },
    { step: "04", title: "Construction", duration: "8 Months", desc: "Active demolition, steel structural framing, and full-scale architectural build." },
    { step: "05", title: "Styling", duration: "3 Weeks", desc: "Custom millwork installation, bespoke furniture sourcing, and final staging." },
    { step: "06", title: "Final Delivery", duration: "1 Day", desc: "The grand reveal and handover of the fully transformed luxury property." }
  ],
  materials: [
    { name: "Calacatta Gold Marble", desc: "Bookmatched slabs used for the 14-foot kitchen island and primary bathroom.", supplier: "Antolini Italy", application: "Surfaces", image: "/images/material-italian-marble.png" },
    { name: "European White Oak", desc: "10-inch wide plank engineered hardwood providing immense warmth.", supplier: "Hakwood", application: "Flooring", image: "/images/material-engineered-wood.png" },
    { name: "Architectural Bronze", desc: "Custom patinated bronze used for window mullions and bespoke door hardware.", supplier: "Renovera Custom", application: "Fixtures", image: "/images/material-architectural-glass.png" }
  ],
  gallery: [
    "/images/project-1.png",
    "/images/project-2.png",
    "/images/project-3.png",
    "/images/project-4.png",
    "/images/luxury-dusk-villa.png"
  ],
  beforeAfter: {
    beforeImage: "/images/before-renovation.png",
    afterImage: "/images/after-renovation.png",
    summary: "The transformation from a dark, segmented 1980s build into a luminous, open-concept modern estate.",
    metrics: [
      { label: "Usable Area Increased", value: "+450 sq ft" },
      { label: "Natural Light Improved", value: "300%" },
      { label: "Energy Efficiency", value: "A+ Rated" }
    ]
  },
  timeline: [
    { milestone: "Project Start", date: "Jan 2024" },
    { milestone: "Concept Approval", date: "Mar 2024" },
    { milestone: "Demolition & Steel Work", date: "Jun 2024" },
    { milestone: "Interior Installation", date: "Oct 2024" },
    { milestone: "Final Handover", date: "Dec 2024" }
  ],
  highlights: [
    { value: "12", label: "Months" },
    { value: "8,500", label: "Sq Ft" },
    { value: "150+", label: "Drawings" },
    { value: "45", label: "Craftsmen" }
  ],
  testimonial: {
    quote: "Renovera didn't just build us a house; they architected a completely new way for our family to live. The precision, the materials, and the vision were flawless.",
    client: "David & Eleanor Vance",
    project: "The Glass House Estate",
    location: "Mumbai",
    rating: 5,
    image: "/images/avatar-1.png"
  },
  relatedProjects: [
    { title: "Alpine Modern Retreat", category: "Luxury Villas", location: "Pune", image: "/images/project-1.png", slug: "alpine-modern" },
    { title: "Skyline Penthouse", category: "Apartments", location: "Mumbai", image: "/images/project-4.png", slug: "skyline-penthouse" },
    { title: "Minimalist Pavilion", category: "Architecture", location: "Bengaluru", image: "/images/project-3.png", slug: "minimalist-pavilion" }
  ],
  cta: {
    heading: "Inspired by This Transformation?",
    description: "Let's create a home that reflects your lifestyle, vision, and aspirations.",
    primaryCTA: "Book Consultation",
    secondaryCTA: "View Services"
  }
};

const projectDirectory = {
  "glass-house-estate": {
    title: "The Glass House Estate",
    category: "Luxury Villas",
    location: "Mumbai",
    area: "12,500 sq ft",
    duration: "18 Months",
    propertyType: "Heritage Estate",
    style: "Modern",
    year: "2024",
    heroImage: "/images/luxury-dusk-villa.png",
  },
  "alpine-modern": {
    title: "Alpine Modern Retreat",
    category: "Luxury Villas",
    location: "Pune",
    area: "8,200 sq ft",
    duration: "14 Months",
    propertyType: "Mountain Villa",
    style: "Modern",
    year: "2024",
    heroImage: "/images/project-1.png",
  },
  "heritage-townhouse": {
    title: "Heritage Townhouse",
    category: "Residential",
    location: "Delhi",
    area: "4,500 sq ft",
    duration: "9 Months",
    propertyType: "Townhouse",
    style: "Classic",
    year: "2023",
    heroImage: "/images/project-2.png",
  },
  "skyline-penthouse": {
    title: "Skyline Penthouse",
    category: "Apartments",
    location: "Mumbai",
    area: "6,000 sq ft",
    duration: "11 Months",
    propertyType: "Penthouse",
    style: "Luxury",
    year: "2025",
    heroImage: "/images/project-4.png",
  },
  "minimalist-pavilion": {
    title: "Minimalist Pavilion",
    category: "Architecture",
    location: "Bengaluru",
    area: "10,000 sq ft",
    duration: "16 Months",
    propertyType: "New Build",
    style: "Minimal",
    year: "2026",
    heroImage: "/images/project-3.png",
  },
  "zen-garden": {
    title: "Zen Garden Estate",
    category: "Landscape",
    location: "Hyderabad",
    area: "2 Acres",
    duration: "8 Months",
    propertyType: "Estate",
    style: "Contemporary",
    year: "2022",
    heroImage: "/images/service-2.png",
  },
  "culinary-suite": {
    title: "Chef's Culinary Suite",
    category: "Interior Design",
    location: "Delhi",
    area: "1,200 sq ft",
    duration: "3 Months",
    propertyType: "Apartment",
    style: "Industrial",
    year: "2023",
    heroImage: "/images/service-1.png",
  },
  "silicon-office": {
    title: "Silicon Valley Office",
    category: "Commercial",
    location: "Bengaluru",
    area: "25,000 sq ft",
    duration: "12 Months",
    propertyType: "Office",
    style: "Modern",
    year: "2024",
    heroImage: "/images/service-3.png",
  },
  "coastal-villa": {
    title: "Coastal Modern Villa",
    category: "Luxury Villas",
    location: "Mumbai",
    area: "9,500 sq ft",
    duration: "15 Months",
    propertyType: "Villa",
    style: "Contemporary",
    year: "2025",
    heroImage: "/images/project-1.png",
  },
  "urban-loft": {
    title: "Urban Loft Renovation",
    category: "Apartments",
    location: "Pune",
    area: "3,200 sq ft",
    duration: "6 Months",
    propertyType: "Loft",
    style: "Industrial",
    year: "2023",
    heroImage: "/images/project-2.png",
  },
  "oasis-resort": {
    title: "Oasis Resort Interior",
    category: "Interior Design",
    location: "Hyderabad",
    area: "40,000 sq ft",
    duration: "24 Months",
    propertyType: "Commercial Resort",
    style: "Luxury",
    year: "2026",
    heroImage: "/images/project-4.png",
  }
};

export function getProjectBySlug(slug) {
  const specificData = projectDirectory[slug];
  
  if (!specificData) {
    return null;
  }

  return {
    ...baseProjectData,
    ...specificData,
    slug
  };
}

export function getAllProjectSlugs() {
  return Object.keys(projectDirectory);
}
