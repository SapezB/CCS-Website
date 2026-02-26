import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  HardHat,
  MessageSquare,
  CheckCircle,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Home = () => {
  const homeImages = import.meta.glob(
    "../images/home/*.{png,jpg,jpeg,webp,svg}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ) as Record<string, string>;
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
              Established 2014
            </span>
            <h1 className="heading-serif text-5xl md:text-7xl mb-6 leading-[1.1]">
              Building Dreams in{" "}
              <span className="italic text-sky-800">London</span> for Over a
              Decade
            </h1>
            <p className="text-stone-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              County Construction Service Ltd. crafts exceptional living spaces.
              We’re not just builders; we’re a dedicated team of professionals
              passionate about transforming your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-sky-900 text-white px-8 py-4 rounded font-semibold flex items-center gap-2 hover:gap-4 transition-all group"
              >
                Start My Project{" "}
                <ArrowRight size={18} className="transition-all" />
              </Link>
              <Link
                to="/projects"
                className="border border-stone-300 px-8 py-4 rounded font-semibold hover:bg-stone-100 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-stone-100">
              <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                className="w-full h-full hero-swiper"
              >
                {Object.values(homeImages).map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      alt={`Construction Excellence ${index + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-stone-100 z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                  <Award className="text-stone-900" size={24} />
                </div>
                <div>
                  <p className="font-bold text-xl">10+ Years</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">
                    Of Excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">200+</p>
            <p className="text-stone-400 text-sm uppercase tracking-widest">
              Projects Done
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">10+</p>
            <p className="text-stone-400 text-sm uppercase tracking-widest">
              Years Exp
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">100%</p>
            <p className="text-stone-400 text-sm uppercase tracking-widest">
              Satisfaction
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">50+</p>
            <p className="text-stone-400 text-sm uppercase tracking-widest">
              Team Members
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="heading-serif text-4xl md:text-5xl mb-4 text-sky-900">
                Our Core Services
              </h2>
              <p className="text-stone-500">
                From luxury refurbishments to complex extensions, we handle
                every aspect of your construction needs in London.
              </p>
            </div>
            <Link
              to="/services"
              className="text-stone-900 font-bold flex items-center gap-2 group"
            >
              View All Services{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Extensions",
                desc: "Expand your living space with seamless architectural extensions.",
                img: "src/images/services/extensions.jpg",
              },
              {
                title: "Loft Conversions",
                desc: "Transform unused attic space into beautiful, functional rooms.",
                img: "src/images/services/loft-conversions.webp",
              },
              {
                title: "Refurbishments",
                desc: "Complete home transformations with premium finishes.",
                img: "src/images/services/refurbishments.webp",
              },
            ].map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl md:text-5xl mb-4 text-sky-900">
              Why Choose CCS?
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Choosing the right construction partner is crucial. Here is why
              Londoners trust us with their most important projects.
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
                icon: <HardHat size={32} />,
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
                icon: <CheckCircle size={32} />,
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
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-stone-200 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="text-stone-900 mb-6">{f.icon}</div>
                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-stone-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CoConstruct Section */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <a
              href="https://www.coconstruct.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://www.ccs-london.co.uk/wp-content/uploads/sites/8/2025/01/xcoconstructor.webp.pagespeed.ic.jfaQT1axYG.webp"
                alt="CoConstruct - A Buildertrend Company"
                className="h-8 md:h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            </a>

            <a
              href="https://coconstruct.com/skins/default/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 text-white px-6 py-3 rounded-lg text-xl font-medium hover:bg-[#356b85] transition-all shadow-lg flex items-center justify-center min-w-[240px]"
            >
              Customer Portal
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
