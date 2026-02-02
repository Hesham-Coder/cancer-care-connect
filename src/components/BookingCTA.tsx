import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Phone, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import patternBg from "@/assets/pattern-bg.jpg";

const BookingCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactOptions = [
    {
      icon: Calendar,
      title: "Book Online",
      description: "Schedule your appointment 24/7",
      action: "Book Now",
      primary: true,
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "1-800-CANCER-CARE",
      action: "Call Now",
      primary: false,
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our patient coordinators",
      action: "Start Chat",
      primary: false,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={patternBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>

      <div className="container-wide relative z-10">
        <div className="bg-card rounded-4xl shadow-strong border border-border/50 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="ribbon mb-6 inline-flex"
              >
                <Clock className="w-4 h-4" />
                Available 24/7
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="section-title mb-6"
              >
                Ready to Start Your{" "}
                <span className="text-primary">Healing Journey?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg leading-relaxed mb-8"
              >
                Our patient coordinators are ready to help you schedule a
                consultation with our expert oncologists. We're here to answer
                your questions and guide you through every step.
              </motion.p>

              {/* Contact Options */}
              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                      option.primary
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          option.primary
                            ? "bg-primary-foreground/20"
                            : "bg-primary/10"
                        }`}
                      >
                        <option.icon
                          className={`w-5 h-5 ${
                            option.primary ? "text-primary-foreground" : "text-primary"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{option.title}</div>
                        <div
                          className={`text-sm ${
                            option.primary
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {option.description}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant={option.primary ? "secondary" : "default"}
                      size="sm"
                      className={`rounded-full ${
                        option.primary
                          ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                          : ""
                      }`}
                    >
                      {option.action}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Booking Widget Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-teal-light p-8 md:p-12 flex flex-col justify-center"
            >
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/30">
                <h3 className="font-display text-2xl font-semibold mb-2">
                  Quick Appointment
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form and we'll contact you within 24 hours.
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Department
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                      <option value="">Select department</option>
                      <option value="breast">Breast Cancer</option>
                      <option value="lung">Lung Cancer</option>
                      <option value="colorectal">Colorectal Cancer</option>
                      <option value="prostate">Prostate Cancer</option>
                      <option value="blood">Blood Cancers</option>
                      <option value="pediatric">Pediatric Oncology</option>
                    </select>
                  </div>
                  <Button className="w-full btn-hero mt-2">
                    <Calendar className="w-5 h-5" />
                    Request Appointment
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting, you agree to our privacy policy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
