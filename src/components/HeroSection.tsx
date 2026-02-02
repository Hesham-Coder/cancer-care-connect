import { motion } from "framer-motion";
import { Calendar, ArrowRight, Shield, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const stats = [
    { number: "50+", label: "Expert Oncologists" },
    { number: "25K+", label: "Patients Treated" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Emergency Care" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Compassionate cancer care"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(200 30% 12% / 0.92) 0%, hsl(200 30% 15% / 0.75) 40%, hsl(200 30% 18% / 0.3) 70%, transparent 100%)",
          }}
        />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, hsl(175 45% 30% / 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground mb-8"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Leading Cancer Care Since 1995</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-title text-primary-foreground mb-6 text-balance"
          >
            Advanced Cancer Care,{" "}
            <span className="relative">
              <span className="relative z-10">Personalized</span>
              <span
                className="absolute bottom-2 left-0 right-0 h-3 bg-accent/40 -z-0"
                style={{ transform: "skewX(-3deg)" }}
              />
            </span>{" "}
            For You
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-subtitle text-primary-foreground/80 mb-10 max-w-2xl"
          >
            Experience world-class oncology care with cutting-edge treatments,
            compassionate specialists, and a comprehensive support system designed
            around your unique journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button className="btn-hero group">
              <Calendar className="w-5 h-5" />
              Book Your Appointment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" className="btn-outline-hero">
              <Heart className="w-5 h-5" />
              Learn About Our Approach
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-primary-foreground/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background/20 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-primary-foreground/80" />
                  </div>
                ))}
              </div>
              <span>Join 25,000+ patients who trust us</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
