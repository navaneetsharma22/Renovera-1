const baseServiceData = {
  category: "Renovation",
  heroImage: "/images/project-1.png",
  overview: {
    heading: "Transforming Spaces with Precision and Vision.",
    paragraphs: [
      "Our approach focuses on marrying structural integrity with unparalleled aesthetic vision. We believe that a true transformation goes beyond surface-level changes—it requires a fundamental understanding of how you live and interact with your environment.",
      "Whether it involves complex structural modifications or meticulous interior detailing, our team of architects, engineers, and master builders work in perfect synchrony to deliver a space that feels inherently yours."
    ],
    image: "/images/project-3.png",
  },
  benefits: [
    { icon: "Compass", title: "Tailored Design", description: "Every blueprint is custom-drafted to align precisely with your lifestyle." },
    { icon: "Hammer", title: "Premium Materials", description: "We source only the finest stone, wood, and fixtures from global artisans." },
    { icon: "Users", title: "Dedicated Manager", description: "A single point of contact overseeing your project from concept to handover." },
    { icon: "ShieldCheck", title: "Transparent Budget", description: "Fixed-price contracts ensure no hidden costs or unexpected overruns." },
    { icon: "CheckCircle", title: "Quality Assurance", description: "Rigorous multi-point inspections at every major construction milestone." },
    { icon: "Building2", title: "Warranty Support", description: "A comprehensive 5-year structural warranty on all our craftsmanship." }
  ],
  deliverables: [
    "Initial Property Consultation",
    "Detailed Site Survey & Scanning",
    "Architectural Concept Design",
    "Photorealistic 3D Visualization",
    "Curated Material Selection",
    "Permit & Zoning Management",
    "Comprehensive Construction Drawings",
    "Master Execution & Build",
    "Final Quality Handover",
    "5-Year Structural Warranty"
  ],
  process: [
    { step: "01", title: "Discovery", duration: "1-2 Weeks", desc: "Understanding your vision, lifestyle requirements, and the property's architectural potential." },
    { step: "02", title: "Planning", duration: "3-4 Weeks", desc: "Developing spatial layouts, budget frameworks, and securing necessary municipal permits." },
    { step: "03", title: "Design", duration: "4-6 Weeks", desc: "Creating photorealistic 3D renderings, selecting premium materials, and finalizing blueprints." },
    { step: "04", title: "Execution", duration: "Active Build", desc: "Our master builders and craftsmen bring the vision to life under strict quality control." },
    { step: "05", title: "Quality Review", duration: "1 Week", desc: "A rigorous multi-point inspection to ensure every detail meets our uncompromising standards." },
    { step: "06", title: "Handover", duration: "Final Day", desc: "The grand reveal of your transformed space, complete with warranty documentation." }
  ],
  gallery: [
    "/images/project-1.png",
    "/images/project-2.png",
    "/images/project-4.png",
    "/images/material-natural-stone.png",
    "/images/material-architectural-glass.png"
  ],
  materials: [
    { name: "Italian Marble", desc: "Sourced directly from Carrara for breathtaking kitchen islands and bathroom vanities.", image: "/images/material-natural-stone.png" },
    { name: "Engineered Hardwood", desc: "Premium wide-plank European oak providing exceptional durability and timeless warmth.", image: "/images/material-engineered-wood.png" },
    { name: "Architectural Glass", desc: "Floor-to-ceiling ultra-clear glazing to maximize natural light and indoor-outdoor flow.", image: "/images/material-architectural-glass.png" }
  ],
  beforeAfter: {
    beforeImage: "/images/before-renovation.png",
    afterImage: "/images/after-renovation.png",
    summary: "Complete structural overhaul, removing load-bearing walls to create a seamless open-concept living space."
  },
  testimonial: {
    quote: "Renovera didn't just renovate our home; they completely reimagined how we live. The attention to detail and craftsmanship is simply unmatched.",
    client: "Sarah & James Mitchell",
    project: "Historic Villa Restoration",
    location: "Beverly Hills, CA",
    rating: 5,
    image: "/images/avatar-2.png"
  },
  faqs: [
    { question: "How long does this specific service take?", answer: "Depending on the scope, projects typically range from 6 to 12 months from initial design to final handover." },
    { question: "Do you handle all necessary building permits?", answer: "Yes, our in-house permit specialists handle all municipal zoning and building approvals required." },
    { question: "Can we live in the home during construction?", answer: "For full-scale renovations, we highly recommend temporary relocation to ensure safety and speed of execution." },
    { question: "How do you ensure the project stays on budget?", answer: "We provide a fixed-price contract after the design phase, eliminating unexpected costs." },
    { question: "What level of customization is possible?", answer: "Everything is entirely bespoke. From custom millwork to imported stone, your space is uniquely yours." }
  ],
  relatedServices: [
    { title: "Interior Design", desc: "Bespoke interior curation including custom millwork and premium lighting plans.", image: "/images/project-4.png", slug: "interior-design" },
    { title: "Smart Home Integration", desc: "Invisible integration of state-of-the-art automation and climate control.", image: "/images/service-3.png", slug: "smart-home" },
    { title: "Landscape Design", desc: "Creating seamless indoor-outdoor living experiences with luxury hardscaping.", image: "/images/service-2.png", slug: "landscape-design" }
  ],
  cta: {
    heading: "Ready to Begin Your Project?",
    description: "Let's create a tailored solution for your home.",
    primaryCTA: "Book Consultation",
    secondaryCTA: "Call Our Studio"
  }
};

const serviceDirectory = {
  "luxury-home-renovation": {
    title: "Luxury Home Renovation",
    description: "Complete structural and aesthetic transformation of luxury residential properties, modernizing layouts while preserving character.",
    timeline: "6 - 12 Months",
    propertyType: "Residential Homes",
    category: "Renovation",
    heroImage: "/images/project-1.png",
  },
  "villa-renovation": {
    title: "Villa Renovation",
    description: "Extensive renovation services for large estates and villas, including exterior facelifts, structural expansions, and premium finishing.",
    timeline: "8 - 14 Months",
    propertyType: "Luxury Estates",
    category: "Renovation",
    heroImage: "/images/project-2.png",
  },
  "architecture-design": {
    title: "Architecture Design",
    description: "Visionary architectural blueprints and structural engineering from ground-up builds to massive structural overhauls.",
    timeline: "3 - 6 Months",
    propertyType: "New Builds & Additions",
    category: "Architecture",
    heroImage: "/images/project-3.png",
  },
  "interior-design": {
    title: "Interior Design",
    description: "Bespoke interior curation including custom millwork, premium lighting plans, and luxury furniture sourcing.",
    timeline: "2 - 4 Months",
    propertyType: "All Properties",
    category: "Interior Design",
    heroImage: "/images/project-4.png",
  },
  "landscape-design": {
    title: "Landscape Design",
    description: "Creating seamless indoor-outdoor living experiences with luxury pools, outdoor kitchens, and architectural hardscaping.",
    timeline: "3 - 5 Months",
    propertyType: "Estates & Villas",
    category: "Landscape",
    heroImage: "/images/service-2.png",
  },
  "kitchen-remodeling": {
    title: "Kitchen Remodeling",
    description: "High-end culinary spaces featuring professional-grade appliances, custom cabinetry, and premium stone surfaces.",
    timeline: "2 - 3 Months",
    propertyType: "Residential Homes",
    category: "Renovation",
    heroImage: "/images/service-1.png",
  },
  "smart-home": {
    title: "Smart Home Integration",
    description: "Invisible integration of state-of-the-art automation, security, climate control, and architectural lighting systems.",
    timeline: "1 - 2 Months",
    propertyType: "All Properties",
    category: "Smart Homes",
    heroImage: "/images/service-3.png",
  },
  "turnkey-build": {
    title: "Turnkey Design & Build",
    description: "Our comprehensive master service handling every single detail from initial concept sketch to final furniture placement.",
    timeline: "12 - 18 Months",
    propertyType: "Ground-up & Major Renovations",
    category: "Architecture",
    heroImage: "/images/renovera-hero-architecture.png",
  }
};

export function getServiceBySlug(slug) {
  const specificData = serviceDirectory[slug];
  
  if (!specificData) {
    return null; // Return null for 404 handling
  }

  // Merge the specific high-level data with the detailed base layout
  return {
    ...baseServiceData,
    ...specificData,
    slug
  };
}

// Function for Next.js generateStaticParams
export function getAllServiceSlugs() {
  return Object.keys(serviceDirectory);
}
