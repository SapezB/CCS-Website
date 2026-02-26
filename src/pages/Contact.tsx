import { React, useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="heading-serif text-5xl md:text-7xl mb-8 text-sky-900">
              Get in Touch
            </h1>
            <p className="text-stone-500 text-xl mb-12 leading-relaxed">
              Whether you’re curious about our services, need advice on your
              next project, or simply want to chat, we’re here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sky-900 rounded-full flex items-center justify-center text-white shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Office</h4>
                  <p className="text-stone-500">London, RM13 8EU</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sky-900 rounded-full flex items-center justify-center text-white shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-stone-500">0796 0925 977</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sky-900 rounded-full flex items-center justify-center text-white shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-stone-500">info@ccs-london.co.uk</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-sky-900 hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-sky-900 hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-100"
          >
            <h3 className="text-2xl font-bold mb-8 text-stone-900">
              Request a Free Quote
            </h3>
            <form
              action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || "your-id"}`}
              method="POST"
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();

                if (!acceptedPrivacy) {
                  alert("You must accept Privacy Policy before submitting.");
                  return;
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                  placeholder="0796 0925 977"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Service Required
                </label>
                <select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors appearance-none">
                  <option>Extension</option>
                  <option>Loft Conversion</option>
                  <option>Refurbishment</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button className="w-full bg-sky-900 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all">
                Send Message <Send size={18} />
              </button>
              <p>
                <input
                  type="checkbox"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-1"
                />
                This form collects personal information such as your name and
                email, together with the other data fields so we can later
                communicate with you appropriately. By submitting this form, you
                agree to our{" "}
                <Link
                  to="/privacy-policy"
                  className="hover:text-stone-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </form>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-100"
          >
            <h3 className="text-2xl font-bold mb-8">Request a Free Quote</h3>
            <form
              action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || "your-id"}`}
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                  placeholder="0796 0925 977"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors appearance-none"
                >
                  <option>Extension</option>
                  <option>Loft Conversion</option>
                  <option>Refurbishment</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="flex gap-3 items-start text-sm text-stone-500">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-900 cursor-pointer"
                  required
                />
                <label
                  htmlFor="privacy"
                  className="cursor-pointer leading-relaxed"
                >
                  This form collects personal information such as your name and
                  email, together with the other data fields so we can later
                  communicate with you appropriately. By submitting this form,
                  you agree to our{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-stone-900 underline hover:text-stone-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={!acceptedPrivacy}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  acceptedPrivacy
                    ? "bg-stone-900 text-white hover:bg-stone-800"
                    : "bg-stone-200 text-stone-400 cursor-not-allowed"
                }`}
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
