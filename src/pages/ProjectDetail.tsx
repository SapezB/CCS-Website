import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  X,
  Search,
} from "lucide-react";
import { projectsData } from "../data/projects";

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Dynamically import all project images
  const allProjectImages = import.meta.glob(
    "../images/projects/**/*.{png,jpg,jpeg,webp,svg}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ) as Record<string, string>;

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="heading-serif text-4xl mb-6">Project Not Found</h2>
        <Link
          to="/projects"
          className="text-stone-900 font-bold flex items-center justify-center gap-2"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  const getProjectImages = (folderName: string) => {
    return Object.entries(allProjectImages)
      .filter(([path]) => path.includes(`/projects/${folderName}/`))
      .map(([_, url]) => url);
  };

  const dynamicImages = getProjectImages(project.folderName);
  const mainImage =
    dynamicImages.length > 0 ? dynamicImages[0] : project.mainImage;
  const galleryImages =
    dynamicImages.length > 1 ? dynamicImages.slice(1) : project.gallery;

  const nextProject =
    projectsData[(projectsData.indexOf(project) + 1) % projectsData.length];

  return (
    <div className="pt-20">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-stone-900/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white hover:text-stone-300 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden group">
        <img
          src={mainImage}
          alt={project.title}
          className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          onClick={() => setSelectedImage(mainImage)}
        />
        <div className="absolute inset-0 bg-stone-900/40 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-end pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={18} /> Back to Projects
              </Link>
              <p className="text-stone-300 uppercase tracking-widest text-xs font-bold mb-4">
                {project.category}
              </p>
              <h1 className="heading-serif text-5xl md:text-7xl text-white mb-0">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
            <Search
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
              size={24}
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="heading-serif text-3xl md:text-4xl mb-8">
              Project Overview
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {project.fullDesc}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group cursor-zoom-in relative bg-stone-100"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`${project.title} detail ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Search
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      size={24}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 sticky top-24">
              <h3 className="font-bold text-xl mb-8">Project Details</h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-stone-400 shrink-0" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">
                      Location
                    </p>
                    <p className="text-stone-900 font-medium">
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="text-stone-400 shrink-0" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">
                      Year Completed
                    </p>
                    <p className="text-stone-900 font-medium">{project.year}</p>
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-sm uppercase tracking-widest text-stone-900 mb-6">
                Key Features
              </h4>
              <ul className="space-y-4 mb-10">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-stone-600 text-sm"
                  >
                    <CheckCircle2 size={16} className="text-stone-900" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="w-full bg-sky-900 text-white py-4 rounded-lg font-bold flex items-center justify-center text-center gap-2 hover:bg-stone-800 transition-all"
              >
                Enquire About Similar Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Link */}
      <section className="border-t border-stone-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to={`/projects/${nextProject.id}`}
            className="group block text-center"
          >
            <p className="text-stone-400 uppercase tracking-widest text-xs font-bold mb-4">
              Next Project
            </p>
            <h2 className="heading-serif text-4xl md:text-6xl group-hover:text-stone-600 transition-colors mb-8">
              {nextProject.title}
            </h2>
            <div className="inline-flex items-center gap-2 font-bold text-stone-900 group-hover:gap-4 transition-all">
              View Project <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
