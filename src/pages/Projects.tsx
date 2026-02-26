import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

export const Projects = () => {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">(
    "all",
  );

  // Dynamically import all project images
  const allProjectImages = import.meta.glob(
    "../images/projects/**/*.{png,jpg,jpeg,webp,svg}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ) as Record<string, string>;

  const getProjectImages = (folderName: string) => {
    return Object.entries(allProjectImages)
      .filter(([path]) => path.includes(`/projects/${folderName}/`))
      .map(([_, url]) => url);
  };

  const filteredProjects = projectsData.filter((p) =>
    filter === "all" ? true : p.type === filter,
  );

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h1 className="heading-serif text-5xl md:text-7xl mb-6">
                Past Projects
              </h1>
              <p className="text-stone-500 text-xl">
                A showcase of our finest craftsmanship across London's most
                prestigious neighborhoods.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-stone-100 p-2 rounded-lg">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded shadow-sm text-sm font-bold transition-all ${filter === "all" ? "bg-white text-stone-900" : "text-stone-500 hover:text-stone-900"}`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("residential")}
                className={`px-4 py-2 rounded shadow-sm text-sm font-bold transition-all ${filter === "residential" ? "bg-white text-stone-900" : "text-stone-500 hover:text-stone-900"}`}
              >
                Residential
              </button>
              <button
                onClick={() => setFilter("commercial")}
                className={`px-4 py-2 rounded shadow-sm text-sm font-bold transition-all ${filter === "commercial" ? "bg-white text-stone-900" : "text-stone-500 hover:text-stone-900"}`}
              >
                Commercial
              </button>
            </div>
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => {
                const images = getProjectImages(p.folderName);
                const displayImage =
                  images.length > 0 ? images[0] : p.mainImage;

                return (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                  >
                    <Link to={`/projects/${p.id}`}>
                      <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative bg-stone-100">
                        <img
                          src={displayImage}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-stone-900 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                            <ArrowUpRight size={24} />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">
                            {p.category}
                          </p>
                          <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                          <p className="text-stone-500 text-sm leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-stone-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="heading-serif text-6xl mb-4">10+</h4>
            <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">
              Years of Excellence
            </p>
          </div>
          <div>
            <h4 className="heading-serif text-6xl mb-4">250+</h4>
            <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">
              Projects Completed
            </p>
          </div>
          <div>
            <h4 className="heading-serif text-6xl mb-4">100%</h4>
            <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">
              Client Satisfaction
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
