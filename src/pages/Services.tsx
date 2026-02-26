import React from "react";
import { motion } from "motion/react";
import {
  Home as HomeIcon,
  Maximize,
  ArrowUpRight,
  Wrench,
  Bath,
  ChefHat,
  Layout,
  Building2,
  ArrowDownToLine,
} from "lucide-react";
import { Link } from "react-router-dom";
import { serviceData } from "../data/services";

export const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="heading-serif text-5xl md:text-7xl mb-6 text-sky-900">
              Our Services
            </h1>
            <p className="text-stone-500 text-xl max-w-2xl">
              From concept to completion, we provide a comprehensive range of
              construction services tailored to the unique London landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {serviceData.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-6">{s.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-bold text-stone-900 hover:gap-3 transition-all"
                >
                  Enquire Now <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="heading-serif text-4xl md:text-5xl mb-4 ">
              Our Process
            </h2>
            <p className="text-stone-400">
              How we bring your vision to life, step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We meet to discuss your vision, requirements, and budget.",
              },
              {
                step: "02",
                title: "Design & Quote",
                desc: "Detailed architectural planning and a transparent, fixed-price quote.",
              },
              {
                step: "03",
                title: "Construction",
                desc: "Our expert team begins work, with regular updates and site meetings.",
              },
              {
                step: "04",
                title: "Handover",
                desc: "Final walkthrough and ensuring every detail meets our high standards.",
              },
            ].map((p, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-serif italic mb-6">{p.step}</div>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
