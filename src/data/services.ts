import { LucideIcon, Maximize, ArrowUpRight, HomeIcon, Wrench, Bath, ChefHat, Layout, Building2, ArrowDownToLine } from "lucide-react";

// pull in every image file so Vite can emit a hashed url and we don’t rely on
// relative paths (those break on nested routes)
import extensionsImg from "../images/services/extensions.jpg";
import loftImg from "../images/services/loft-conversions.webp";
import refurbImg from "../images/services/refurbishments.webp";
import maintenanceImg from "../images/services/maintenance-and-repairs.webp";
import bathroomImg from "../images/services/bathroom-design-and-installation.webp";
import kitchenImg from "../images/services/kitchen-installation.webp";
import furnitureImg from "../images/services/bespoke-furniture.webp";
import commercialImg from "../images/services/commercial-building-services.webp";
import basementImg from "../images/services/basement-rennovation-services.jpg";

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
      img: extensionsImg,
    },
    {
      icon: ArrowUpRight,
      title: "Loft Conversions",
      desc: "Unlock the potential of your attic. We create stunning master suites, home offices, or extra bedrooms.",
      img: loftImg,
    },
    {
      icon: HomeIcon,
      title: "Refurbishments",
      desc: "Complete interior and exterior renovations. We breathe new life into tired properties with modern finishes.",
      img: refurbImg,
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      desc: "Ongoing support for your property. From structural repairs to general maintenance and upkeep.",
      img: maintenanceImg,
    },
    {
      icon: Bath,
      title: "Bathroom Design & Install",
      desc: "Luxury bathroom transformations. We handle everything from plumbing to bespoke tiling and lighting.",
      img: bathroomImg,
    },
    {
      icon: ChefHat,
      title: "Kitchen Installation",
      desc: "The heart of the home. Custom kitchen fitting with a focus on ergonomics and high-end appliances.",
      img: kitchenImg,
    },
    {
      icon: Layout,
      title: "Bespoke Furniture",
      desc: "Custom-made cabinetry, wardrobes, and storage solutions tailored to your specific space.",
      img: furnitureImg,
    },
    {
      icon: Building2,
      title: "Commercial Building",
      desc: "Professional construction services for businesses, offices, and retail spaces across London.",
      img: commercialImg,
    },
    {
      icon: ArrowDownToLine,
      title: "Basement Renovation",
      desc: "Maximizing underground potential. We specialize in basement tanking, fit-outs, and conversions.",
      img: basementImg,
    }
]