import { LucideIcon, Maximize, ArrowUpRight, HomeIcon, Wrench, Bath, ChefHat, Layout, Building2, ArrowDownToLine } from "lucide-react";

export interface Service{
    icon : LucideIcon;
    title : string;
    desc : string;
    img : string;
}

export const serviceData: Service[] = [

    {
      icon: Maximize,
      title: "Extensions",
      desc: "Transform your home with high-quality extensions that add both space and value. From rear extensions to side-returns.",
      img: "src/images/services/extensions.jpg",
    },
    {
      icon: ArrowUpRight,
      title: "Loft Conversions",
      desc: "Unlock the potential of your attic. We create stunning master suites, home offices, or extra bedrooms.",
      img: "src/images/services/loft-conversions.webp",
    },
    {
      icon: HomeIcon,
      title: "Refurbishments",
      desc: "Complete interior and exterior renovations. We breathe new life into tired properties with modern finishes.",
      img: "src/images/services/refurbishments.webp",
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      desc: "Ongoing support for your property. From structural repairs to general maintenance and upkeep.",
      img: "src/images/services/maintenance-and-repairs.webp",
    },
    {
      icon: Bath,
      title: "Bathroom Design & Install",
      desc: "Luxury bathroom transformations. We handle everything from plumbing to bespoke tiling and lighting.",
      img: "src/images/services/bathroom-design-and-installation.webp",
    },
    {
      icon: ChefHat,
      title: "Kitchen Installation",
      desc: "The heart of the home. Custom kitchen fitting with a focus on ergonomics and high-end appliances.",
      img: "src/images/services/kitchen-installation.webp",
    },
    {
      icon: Layout,
      title: "Bespoke Furniture",
      desc: "Custom-made cabinetry, wardrobes, and storage solutions tailored to your specific space.",
      img: "src/images/services/bespoke-furniture.webp",
    },
    {
      icon: Building2,
      title: "Commercial Building",
      desc: "Professional construction services for businesses, offices, and retail spaces across London.",
      img: "src/images/services/commercial-building-services.webp",
    },
    {
      icon: ArrowDownToLine,
      title: "Basement Renovation",
      desc: "Maximizing underground potential. We specialize in basement tanking, fit-outs, and conversions.",
      img: "src/images/services/basement-rennovation-services.jpg",
    }
]