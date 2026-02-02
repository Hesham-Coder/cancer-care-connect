import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Users,
  HeartHandshake,
  Microscope,
  Clock,
  ShieldCheck,
} from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Award,
      title: "World-Renowned Expertise",
      description:
        "Our team includes internationally recognized oncologists, researchers, and care specialists with decades of experience.",
    },
    {
      icon: Microscope,
      title: "Cutting-Edge Technology",
      description:
        "Access to the latest diagnostic tools, treatment technologies, and clinical trials for the most advanced care options.",
    },
    {
      icon: HeartHandshake,
      title: "Compassionate Care",
      description:
        "Every patient receives personalized attention from our multidisciplinary team committed to your wellbeing.",
    },
    {
      icon: Users,
      title: "Multidisciplinary Approach",
      description:
        "Oncologists, surgeons, radiologists, and support staff collaborate to create comprehensive treatment plans.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock emergency care and patient support services ensure you're never alone in your journey.",
    },
    {
      icon: ShieldCheck,
      title: "Patient Privacy & Security",
      description:
        "HIPAA-compliant systems and strict protocols ensure your medical information remains confidential.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="ribbon mb-4 inline-flex"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Excellence in Every Aspect of{" "}
            <span className="text-primary">Cancer Care</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            We combine advanced medical expertise with genuine compassion to
            provide you with the highest standard of cancer treatment and support.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card-premium group"
            >
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
