import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  ShieldCheck,
  Users,
  Clock,
  CheckCircle2,
  HardHat,
  MessageSquare,
  Search,
  ArrowRight,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Dynamically import images from src/images/about
  const aboutImages = import.meta.glob(
    "../images/about/*.{png,jpg,jpeg,webp,svg}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ) as Record<string, string>;

  const imageList = Object.values(aboutImages);

  // Fallback images if the folder is empty
  const displayImages =
    imageList.length > 0
      ? imageList
      : [
          "https://picsum.photos/seed/about-1/800/600",
          "https://picsum.photos/seed/about-2/800/600",
          "https://picsum.photos/seed/about-3/800/600",
          "https://picsum.photos/seed/about-4/800/600",
          "https://picsum.photos/seed/about-5/800/600",
        ];

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
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white hover:text-stone-300 transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Header */}
      <section className="bg-stone-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/seed/about-header/1920/600"
            className="w-full h-full object-cover"
            alt="Background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="heading-serif text-5xl md:text-7xl mb-6">
              About Us
            </h1>
            <p className="text-stone-400 text-xl max-w-2xl">
              Building Dreams in London for Over a Decade. We’re not just
              builders; we’re a dedicated team of professionals passionate about
              transforming your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-serif text-4xl md:text-5xl mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                For over ten years, County Construction Services Ltd. has been
                transforming homes and businesses across London. We’ve built our
                reputation on a foundation of quality craftsmanship, client
                focus, and transparent communication.
              </p>
              <p>
                From our early beginnings, we’ve remained committed to providing
                a personalized service, ensuring that every project, big or
                small, receives the attention it deserves. We’re proud of the
                work we do and the relationships we’ve built along the way.
              </p>
              <p>
                From concept to completion, we prioritize customer satisfaction,
                ensuring a seamless and stress-free experience.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
              onClick={() => setSelectedImage(displayImages[0])}
            >
              <img
                src={displayImages[0]}
                alt="Our Story"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <Search
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  size={32}
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-stone-100 rounded-2xl -z-10 hidden lg:block"></div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl md:text-5xl mb-4">
              Our Work in Detail
            </h2>
            <p className="text-stone-500">
              A glimpse into the craftsmanship and dedication we bring to every
              project.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayImages.slice(1, 5).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedImage(img)}
                className={`overflow-hidden rounded-xl shadow-lg cursor-zoom-in group relative ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Search
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    size={24}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl md:text-5xl mb-4">
              Why Choose County Construction Service?
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Choosing the right construction partner is crucial. With CCS you
              gain a partner dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={32} />,
                title: "Experience and Expertise",
                desc: "Over two decades of experience in the London construction market.",
              },
              {
                icon: <Users size={32} />,
                title: "Personalised Service",
                desc: "A dedicated team that understands your vision and works closely with you.",
              },
              {
                icon: <MessageSquare size={32} />,
                title: "Transparent Communication",
                desc: "We keep you informed every step of the way, ensuring no surprises.",
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Quality Assurance",
                desc: "Membership in the Federation of Master Builders and CITB provides peace of mind.",
              },
              {
                icon: <CheckCircle2 size={32} />,
                title: "Commitment to Excellence",
                desc: "We're passionate about delivering results that you'll love for years to come.",
              },
              {
                icon: <Search size={32} />,
                title: "Attention to Detail",
                desc: "We meticulously attend to every detail, ensuring a flawless finish.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-white mb-6">{f.icon}</div>
                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-stone-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-serif text-4xl md:text-6xl mb-8">
            Ready to bring your dream project to life?
          </h2>
          <p className="text-stone-600 text-xl mb-12">
            Transforming your vision into reality starts here. Request a free,
            no-obligation quote in just a few clicks.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-sky-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-stone-800 transition-all group"
          >
            Start My Project{" "}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-center">
              <p className="font-bold text-2xl text-stone-900">FMB</p>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest">
                Federation of Master Builders
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl text-stone-900">CITB</p>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest">
                Construction Industry Training Board
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl text-stone-900">GAS SAFE</p>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest">
                Registered Engineers
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl text-stone-900">NICEIC</p>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest">
                Approved Contractor
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
