import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Specialties", href: "#specialties" },
    { label: "Patient Resources", href: "#resources" },
    { label: "Research", href: "#research" },
    { label: "Careers", href: "#careers" },
  ];

  const services = [
    { label: "Breast Cancer", href: "#" },
    { label: "Lung Cancer", href: "#" },
    { label: "Colorectal Cancer", href: "#" },
    { label: "Prostate Cancer", href: "#" },
    { label: "Blood Cancers", href: "#" },
    { label: "Pediatric Oncology", href: "#" },
  ];

  const patientResources = [
    { label: "Patient Portal", href: "#" },
    { label: "Insurance & Billing", href: "#" },
    { label: "Prepare for Your Visit", href: "#" },
    { label: "Support Groups", href: "#" },
    { label: "Financial Assistance", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                Stay Informed
              </h3>
              <p className="text-primary-foreground/70">
                Subscribe to our newsletter for health tips and center updates.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-5 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
              />
              <Button className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  CC
                </span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg block">
                  Cancer Center
                </span>
                <span className="text-xs text-primary-foreground/60">
                  Comprehensive Care
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Providing world-class cancer care with compassion, expertise, and
              cutting-edge technology since 1995.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="font-semibold mb-4">Patient Resources</h4>
            <ul className="space-y-3">
              {patientResources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  123 Medical Center Drive
                  <br />
                  Healthcare City, HC 12345
                </span>
              </li>
              <li>
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  1-800-CANCER-CARE
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cancercenter.com"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  info@cancercenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-left">
            © 2025 Comprehensive Cancer Center. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              HIPAA Compliance
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
