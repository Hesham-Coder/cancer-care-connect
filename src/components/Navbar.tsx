import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { NAV_LINKS, PHONE_HREF } from "@/core/constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    specialties: t.nav.specialties,
    doctors: t.nav.doctors,
    resources: t.nav.resources,
    contact: t.nav.contact,
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-nav shadow-medium py-3"
            : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3" aria-label="Cancer Center Home">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">CC</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-display font-semibold text-lg transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                Cancer Center
              </span>
              <span className={`block text-xs font-body transition-colors ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                Comprehensive Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`nav-link text-sm transition-colors ${isScrolled ? "text-foreground/80" : "text-primary-foreground/90"}`}
              >
                {navLabels[link.key]}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle variant={isScrolled ? "dark" : "light"} />
            <a
              href={PHONE_HREF}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
              aria-label={t.nav.emergency}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{t.nav.emergency}</span>
            </a>
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 gap-2 shadow-coral"
            >
              <Calendar className="w-4 h-4" />
              {t.nav.bookAppointment}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle variant={isScrolled ? "dark" : "light"} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-white/10"}`}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors"
                >
                  {navLabels[link.key]}
                </motion.a>
              ))}
              <div className="pt-6 border-t border-border">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-lg gap-2">
                  <Calendar className="w-5 h-5" />
                  {t.nav.bookAppointment}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
