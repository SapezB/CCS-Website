export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  desc: string;
  fullDesc: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  folderName: string;
  type: 'residential' | 'commercial';
}

export const projectsData: Project[] = [
  {
    id: "edgware-apartment",
    title: "Edgware Apartment",
    category: "Residential Refurbishment",
    location: "Edgware, London",
    year: "2024",
    desc: "A full renovation intertwining classic interior with contemporary flare.",
    fullDesc: "This apartment underwent a full renovation, intertwining a classic interior with hints of contemporary flare. This renovation completely transformed the space, focusing on maximizing natural light and creating an open-plan living area that feels both spacious and intimate.",
    mainImage: "https://picsum.photos/seed/proj1/1200/800",
    gallery: [
      "https://picsum.photos/seed/proj1-1/800/600",
      "https://picsum.photos/seed/proj1-2/800/600",
      "https://picsum.photos/seed/proj1-3/800/600"
    ],
    features: ["Open-plan living", "Custom cabinetry", "Premium marble finishes", "Smart lighting system"],
    folderName: "edgewareApartment",
    type: "residential"
  },
  {
    id: "geldesten-home",
    title: "Geldesten Home",
    category: "Extension & Refurbishment",
    location: "Hackney, London",
    year: "2023",
    desc: "A stylish yet eccentric refurbishment of a Hackney property.",
    fullDesc: "One of our favourite projects – a stylish yet eccentric refurbishment of this Hackney property which brings in much character. The project involved a significant rear extension and a complete overhaul of the existing structure to create a unique family home.",
    mainImage: "https://picsum.photos/seed/proj2/1200/800",
    gallery: [
      "https://picsum.photos/seed/proj2-1/800/600",
      "https://picsum.photos/seed/proj2-2/800/600",
      "https://picsum.photos/seed/proj2-3/800/600"
    ],
    features: ["Architectural extension", "Exposed brickwork", "Bespoke kitchen", "Landscaped garden access"],
    folderName: "geldenstenHome",
    type: "residential"
  },
  {
    id: "form-studio",
    title: "Form Studio",
    category: "Commercial Basement",
    location: "Central London",
    year: "2024",
    desc: "Commercial refurbishment in a central London basement.",
    fullDesc: "In late 2024, we completed a commercial refurbishment in a central London basement, providing lots of life, energy and splendour. The challenge was to transform a dark, subterranean space into a vibrant, functional studio environment.",
    mainImage: "https://picsum.photos/seed/proj3/1200/800",
    gallery: [
      "https://picsum.photos/seed/proj3-1/800/600",
      "https://picsum.photos/seed/proj3-2/800/600",
      "https://picsum.photos/seed/proj3-3/800/600"
    ],
    features: ["Industrial aesthetic", "Advanced ventilation", "Acoustic treatment", "Custom workstations"],
    folderName: "formStudio",
    type: "commercial"
  },
  {
    id: "nightingale-home",
    title: "Nightingale Home",
    category: "Loft Conversion",
    location: "Edgware, London",
    year: "2023",
    desc: "Transforming a previously unused space into a stylish new master suite.",
    fullDesc: "Edgware Loft Conversion: A Stylish New Space Our team recently completed a stunning loft conversion in Edgware, transforming a previously unused attic into a luxurious master suite complete with a walk-in wardrobe and en-suite bathroom.",
    mainImage: "https://picsum.photos/seed/proj4/1200/800",
    gallery: [
      "https://picsum.photos/seed/proj4-1/800/600",
      "https://picsum.photos/seed/proj4-2/800/600",
      "https://picsum.photos/seed/proj4-3/800/600"
    ],
    features: ["Dormer conversion", "En-suite bathroom", "Juliet balcony", "Built-in storage"],
    folderName: "nightingaleHome",
    type: "residential"
  },
  {
    id: "kilburn-home",
    title: "Kilburn Home",
    category: "Residential Refurb",
    location: "Kilburn, London",
    year: "2024",
    desc: "Comprehensive renovation transforming a property into a modern sanctuary.",
    fullDesc: "Kilburn Transformation: A Modern Sanctuary Our team recently completed a comprehensive renovation of a property in Kilburn, transforming it into a bright, contemporary home that respects its Victorian heritage while offering modern comfort.",
    mainImage: "https://picsum.photos/seed/proj5/1200/800",
    gallery: [
      "https://picsum.photos/seed/proj5-1/800/600",
      "https://picsum.photos/seed/proj5-2/800/600",
      "https://picsum.photos/seed/proj5-3/800/600"
    ],
    features: ["Period feature restoration", "Underfloor heating", "Designer kitchen", "Energy efficiency upgrades"],
    folderName: "kilburnHome",
    type: "residential"
  },
  {
    id: "golders-home",
    title: "Golders Home",
    category: "Extension & Refurbishment",
    location: "Golders Green, London",
    year: "2023",
    desc: "Reimagining a classic London residence with modern functionality.",
    fullDesc: "A Classic London Residence, Reimagined Our team recently undertook a comprehensive interior renovation of a stunning property in Golders Green. The project focused on creating a seamless flow between the indoor and outdoor spaces.",
    mainImage: "https://picsum.photos/seed/proj6/1200/800",
    gallery: [
      "https://picsum.photos/seed/proj6-1/800/600",
      "https://picsum.photos/seed/proj6-2/800/600",
      "https://picsum.photos/seed/proj6-3/800/600"
    ],
    features: ["Glass-roof extension", "Outdoor kitchen", "Cinema room", "Bespoke joinery"],
    folderName: "goldersGreenHome",
    type: "residential"
  }
];
