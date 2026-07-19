import { Shield, Hammer, Building, Ruler, CheckCircle, Leaf } from "lucide-react";

export const qualityStandards = [
  {
    id: "structural-integrity",
    number: "01",
    title: "Structural Integrity",
    description: "Every renovation follows engineering best practices to ensure strength, safety, and long-term durability.",
    icon: Building
  },
  {
    id: "premium-materials",
    number: "02",
    title: "Premium Materials",
    description: "We source carefully selected materials from trusted suppliers to achieve timeless beauty and lasting performance.",
    icon: Shield
  },
  {
    id: "precision-execution",
    number: "03",
    title: "Precision Execution",
    description: "Every detail is executed with accuracy, ensuring flawless finishes and exceptional workmanship.",
    icon: Ruler
  },
  {
    id: "quality-inspections",
    number: "04",
    title: "Quality Inspections",
    description: "Regular site inspections and milestone reviews guarantee consistent quality throughout construction.",
    icon: CheckCircle
  },
  {
    id: "sustainable-solutions",
    number: "05",
    title: "Sustainable Solutions",
    description: "Energy-efficient systems and environmentally conscious materials are integrated whenever possible.",
    icon: Leaf
  },
  {
    id: "warranty-aftercare",
    number: "06",
    title: "Warranty & Aftercare",
    description: "Every completed project is backed by post-completion support and warranty services for complete peace of mind.",
    icon: Hammer
  }
];

export const materials = [
  {
    id: "natural-stone",
    name: "Natural Stone",
    description: "Sourced from premier quarries, offering unparalleled durability and unique organic veining.",
    application: "Flooring, Facades, Countertops",
    image: "/images/material-natural-stone.png"
  },
  {
    id: "engineered-wood",
    name: "Engineered Wood",
    description: "High-performance timber balancing aesthetic warmth with structural resilience.",
    application: "Flooring, Millwork, Ceilings",
    image: "/images/material-engineered-wood.png"
  },
  {
    id: "italian-marble",
    name: "Italian Marble",
    description: "The pinnacle of luxury finishes, bringing timeless elegance and light to interior spaces.",
    application: "Bathrooms, Kitchen Islands",
    image: "/images/material-italian-marble.png"
  },
  {
    id: "architectural-glass",
    name: "Architectural Glass",
    description: "High-efficiency thermal glazing designed to dissolve the boundaries between indoors and out.",
    application: "Windows, Balustrades, Partitions",
    image: "/images/material-architectural-glass.png"
  }
];

export const metrics = [
  { value: "100+", label: "Quality Checks Per Project" },
  { value: "25+", label: "Premium Material Partners" },
  { value: "10-Year", label: "Structural Warranty" },
  { value: "100%", label: "Site Inspection Compliance" }
];
