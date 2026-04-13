import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const specialtyImages = [
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=600&h=400&fit=crop",
];

const specialtyColors = [
  "hsl(350, 80%, 60%)",
  "hsl(200, 70%, 50%)",
  "hsl(150, 60%, 45%)",
  "hsl(220, 70%, 55%)",
  "hsl(280, 65%, 55%)",
  "hsl(40, 85%, 55%)",
];

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="specialties" className="py-24 md:py-32" ref={ref} aria-labelledby="specialties-title">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="ribbon mb-4 inline-flex"
            >
              {t.specialties.ribbon}
            </motion.span>
            <motion.h2
              id="specialties-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-title mb-4"
            >
              {t.specialties.title}{" "}
              <span className="text-primary">{t.specialties.titleHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-subtitle"
            >
              {t.specialties.subtitle}
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: dir === "rtl" ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            {t.specialties.viewAll}
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.specialties.items.map((specialty, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={specialtyImages[index]}
                  alt={specialty.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background: `linear-gradient(to top, ${specialtyColors[index]} 0%, transparent 100%)`,
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2 group-hover:translate-y-0 transform translate-y-2 transition-transform duration-300">
                  {specialty.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {specialty.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-primary-foreground font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  {t.specialties.learnMore} <ArrowIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
