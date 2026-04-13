import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonialImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, dir } = useLanguage();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % t.testimonials.items.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length
    );
  };

  const current = t.testimonials.items[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-teal-deep relative overflow-hidden" ref={ref} aria-labelledby="testimonials-title">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, hsl(175 45% 60%) 0%, transparent 40%)`,
        }}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-4"
          >
            {t.testimonials.ribbon}
          </motion.span>
          <motion.h2
            id="testimonials-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-primary-foreground mb-6"
          >
            {t.testimonials.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle text-primary-foreground/70 mx-auto"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className={`absolute -top-6 ${dir === "rtl" ? "right-8 md:right-12" : "left-8 md:left-12"} w-12 h-12 rounded-full bg-accent flex items-center justify-center z-10`}>
              <Quote className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
              <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl font-display text-primary-foreground leading-relaxed mb-8">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonialImages[currentIndex]}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-foreground/20"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-primary-foreground">{current.author}</div>
                  <div className="text-sm text-primary-foreground/60">{current.role}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                aria-label={dir === "rtl" ? "Next testimonial" : "Previous testimonial"}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2" role="tablist">
                {t.testimonials.items.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === currentIndex}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-accent w-6"
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                aria-label={dir === "rtl" ? "Previous testimonial" : "Next testimonial"}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
