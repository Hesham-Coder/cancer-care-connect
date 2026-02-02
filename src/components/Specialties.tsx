import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specialties = [
    {
      title: "Breast Cancer",
      description:
        "Comprehensive breast cancer care including screening, diagnosis, surgery, chemotherapy, and reconstruction.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      color: "hsl(350, 80%, 60%)",
    },
    {
      title: "Lung Cancer",
      description:
        "Advanced pulmonary oncology with state-of-the-art imaging, minimally invasive surgery, and targeted therapies.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
      color: "hsl(200, 70%, 50%)",
    },
    {
      title: "Colorectal Cancer",
      description:
        "Expert gastrointestinal oncology combining surgery, chemotherapy, and immunotherapy for optimal outcomes.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
      color: "hsl(150, 60%, 45%)",
    },
    {
      title: "Prostate Cancer",
      description:
        "Specialized urologic oncology with robotic surgery, radiation therapy, and hormone treatments.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
      color: "hsl(220, 70%, 55%)",
    },
    {
      title: "Blood Cancers",
      description:
        "Hematology-oncology excellence for leukemia, lymphoma, and myeloma with bone marrow transplant capabilities.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
      color: "hsl(280, 65%, 55%)",
    },
    {
      title: "Pediatric Oncology",
      description:
        "Specialized care for children and adolescents with cancer, combining treatment with child-friendly support.",
      image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=600&h=400&fit=crop",
      color: "hsl(40, 85%, 55%)",
    },
  ];

  return (
    <section id="specialties" className="py-24 md:py-32" ref={ref}>
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
              Our Specialties
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-title mb-4"
            >
              Specialized Cancer Care{" "}
              <span className="text-primary">Programs</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-subtitle"
            >
              Each of our specialized programs brings together expert teams
              dedicated to specific cancer types, ensuring you receive the most
              advanced, targeted care.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            View All Specialties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background: `linear-gradient(to top, ${specialty.color} 0%, transparent 100%)`,
                }}
              />

              {/* Content */}
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
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
