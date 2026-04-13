import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { PHONE_HREF, EMAIL, ADDRESS_LINE_1, ADDRESS_LINE_2, SOCIAL_LINKS } from "@/core/constants";

const Footer = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const quickLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.doctors, href: "#doctors" },
    { label: t.nav.specialties, href: "#specialties" },
    { label: t.nav.resources, href: "#resources" },
  ];

  const services = t.specialties.items.map((item) => ({
    label: item.title,
    href: "#",
  }));

  const socialLinks = [
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-navy text-primary-foreground" role="contentinfo">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-start">
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                {t.footer.stayInformed}
              </h3>
              <p className="text-primary-foreground/70">{t.footer.newsletterSubtitle}</p>
            </div>
            <form className="flex w-full lg:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">{t.footer.emailPlaceholder}</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 lg:w-80 px-5 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                required
              />
              <Button type="submit" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 gap-2">
                {t.footer.subscribe}
                <ArrowIcon className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">CC</span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg block">Cancer Center</span>
                <span className="text-xs text-primary-foreground/60">Comprehensive Care</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {t.footer.brandDescription}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="font-semibold mb-4">{t.footer.ourServices}</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Patient Resources */}
          <nav aria-label="Patient resources">
            <h4 className="font-semibold mb-4">{t.footer.patientResources}</h4>
            <ul className="space-y-3">
              {t.footer.patientResourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-primary-foreground/70">
                  {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
                </span>
              </li>
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                  1-800-CANCER-CARE
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-start">
            {t.footer.copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[t.footer.privacyPolicy, t.footer.termsOfService, t.footer.hipaa, t.footer.accessibility].map(
              (label) => (
                <a key={label} href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
