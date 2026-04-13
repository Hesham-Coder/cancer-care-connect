import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, GraduationCap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const doctorImages = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
];

const DoctorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="doctors" className="py-20 bg-muted/30" aria-labelledby="doctors-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            {t.doctors.ribbon}
          </span>
          <h2 id="doctors-title" className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            {t.doctors.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.doctors.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.doctors.items.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={doctorImages[index]}
                    alt={doctor.name}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      <Calendar className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                      {t.doctors.bookAppointment}
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3">{doctor.title}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>{doctor.specialty}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>{doctor.education}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                    {doctor.experience}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t.doctors.viewAll}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;
