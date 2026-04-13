import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Users,
  HeartHandshake,
  Microscope,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const featureIcons = [Award, Microscope, HeartHandshake, Users, Clock, ShieldCheck];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30" ref={ref} aria-labelledby="why-choose-title">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="ribbon mb-4 inline-flex"
          >
            {t.whyChooseUs.ribbon}
          </motion.span>
          <motion.h2
            id="why-choose-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            {t.whyChooseUs.title}{" "}
            <span className="text-primary">{t.whyChooseUs.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            {t.whyChooseUs.subtitle}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.whyChooseUs.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card-premium group"
              >
                <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
