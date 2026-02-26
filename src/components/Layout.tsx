import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { projectsData } from "../data/projects";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    {
      name: "Customer Portal",
      path: "https://coconstruct.com/app/login",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/src/images/ccs-logo-2.1.png"
            alt="CCS London Logo"
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none tracking-tight">
              CCS LONDON
            </span>
            <span className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">
              Construction Service
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-stone-600 text-stone-500"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-stone-600 ${location.pathname === item.path ? "text-stone-900" : "text-stone-500"}`}
              >
                {item.name}
              </Link>
            ),
          )}
          <Link
            to="/contact"
            className="bg-sky-900 text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-stone-800 transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-stone-800"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-stone-800"
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-stone-900 text-white px-5 py-3 rounded font-semibold mt-2 text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="lg:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 flex items-center justify-center rounded">
            <img
              src="/src/images/ccs-logo-2.1.png"
              alt="CCS London Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <span className="font-bold text-lg tracking-tight">CCS LONDON</span>
        </div>
        <p className="text-stone-500 text-sm leading-relaxed mb-6">
          Premium construction services in London. Crafting exceptional living
          spaces for over a decade with a focus on quality and client
          satisfaction.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/ccs_construction_ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/ccslondonltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-stone-900">
          Company
        </h4>
        <ul className="flex flex-col gap-4 text-sm text-stone-600">
          <li>
            <Link
              to="/about"
              className="hover:text-stone-900 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-stone-900 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-stone-900 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-stone-900 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-stone-900">
          Legal
        </h4>
        <ul className="flex flex-col gap-4 text-sm text-stone-600">
          <li>
            <Link
              to="/privacy-policy"
              className="hover:text-stone-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-stone-900">
          Contact
        </h4>
        <ul className="flex flex-col gap-4 text-sm text-stone-600">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="shrink-0 text-stone-400" />
            <span>London, RM13 8EU</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="shrink-0 text-stone-400" />
            <span>0796 0925 977</span>
          </li>
          <li className="mt-4">
            <a
              href="https://coconstruct.com/app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-stone-200 text-stone-800 py-3 rounded font-semibold hover:bg-stone-300 transition-all text-center block"
            >
              Customer Portal
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
      <p>
        © {new Date().getFullYear()} County Construction Service Ltd. All rights
        reserved.
      </p>
      <div className="flex gap-6">
        <span>FMB Member</span>
        <span>CITB Registered</span>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title based on path
    const pageTitles: Record<string, string> = {
      "/": "Home",
      "/about": "About Us",
      "/services": "Our Services",
      "/projects": "Our Portfolio",
      "/contact": "Contact Us",
      "/privacy-policy": "Privacy Policy",
    };

    // Handle dynamic project detail pages
    if (pathname.startsWith("/projects/")) {
      const projectId = pathname.split("/").pop();
      const project = projectsData.find((p) => p.id === projectId);
      if (project) {
        document.title = `${project.title} | CCS London`;
        return;
      }
    }

    const currentPage = pageTitles[pathname] || "CCS London";
    document.title = `${currentPage} | CCS London`;
  }, [pathname]);

  React.useEffect(() => {
    // Update SEO meta tags (description, Open Graph, Twitter, canonical)
    const defaultImage = `${window.location.origin}/src/images/home/home-image-1.jpg`;

    const pageDescriptions: Record<string, string> = {
      "/": "CCS London — premium construction services in London. Design, build and renovate your home with quality and care.",
      "/about":
        "About CCS London — experienced construction specialists delivering high-quality residential builds and renovations in London.",
      "/services":
        "Professional construction and renovation services including extensions, refurbishments and bespoke builds across London.",
      "/projects":
        "Browse our portfolio of completed residential projects showcasing craftsmanship and attention to detail.",
      "/contact":
        "Contact CCS London for a free quote and expert consultation on your construction project.",
      "/privacy-policy": "Privacy Policy for County Construction Service Ltd.",
    };

    // find project if on a project detail page
    let description =
      pageDescriptions[pathname] ||
      "CCS London — premium construction services in London.";
    if (pathname.startsWith("/projects/")) {
      const projectId = pathname.split("/").pop();
      const project = projectsData.find((p) => p.id === projectId);
      if (project) {
        description =
          (project.desc && project.desc.substring(0, 155)) ||
          project.fullDesc?.substring(0, 155) ||
          project.title ||
          description;
      }
    }

    function setMetaName(name: string, content: string) {
      let el = document.head.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (el) el.content = content;
      else {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        el.setAttribute("content", content);
        document.head.appendChild(el);
      }
    }

    function setMetaProp(prop: string, content: string) {
      let el = document.head.querySelector(
        `meta[property="${prop}"]`,
      ) as HTMLMetaElement | null;
      if (el) el.setAttribute("content", content);
      else {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        el.setAttribute("content", content);
        document.head.appendChild(el);
      }
    }

    function setCanonical(href: string) {
      let link = document.head.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement | null;
      if (link) link.href = href;
      else {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        link.href = href;
        document.head.appendChild(link);
      }
    }

    // apply tags
    setMetaName("description", description);
    setMetaProp("og:title", document.title);
    setMetaProp("og:description", description);
    setMetaProp("og:image", defaultImage);
    setMetaProp("og:url", window.location.href);
    setMetaName("twitter:card", "summary_large_image");
    setCanonical(window.location.href);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
