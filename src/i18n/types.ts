export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

export interface TranslationSet {
  // Navigation
  nav: {
    about: string;
    specialties: string;
    doctors: string;
    resources: string;
    contact: string;
    bookAppointment: string;
    emergency: string;
  };
  // Hero
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
    stats: {
      doctors: { number: string; label: string };
      patients: { number: string; label: string };
      satisfaction: { number: string; label: string };
      emergency: { number: string; label: string };
    };
  };
  // Why Choose Us
  whyChooseUs: {
    ribbon: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: Array<{ title: string; description: string }>;
  };
  // Specialties
  specialties: {
    ribbon: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewAll: string;
    learnMore: string;
    items: Array<{ title: string; description: string }>;
  };
  // Doctors
  doctors: {
    ribbon: string;
    title: string;
    subtitle: string;
    bookAppointment: string;
    viewAll: string;
    yearsExp: string;
    items: Array<{
      name: string;
      title: string;
      specialty: string;
      education: string;
      experience: string;
    }>;
  };
  // Testimonials
  testimonials: {
    ribbon: string;
    title: string;
    subtitle: string;
    items: Array<{
      quote: string;
      author: string;
      role: string;
    }>;
  };
  // Booking CTA
  booking: {
    ribbon: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bookOnline: string;
    bookOnlineDesc: string;
    bookNow: string;
    callUs: string;
    callUsDesc: string;
    callNow: string;
    liveChat: string;
    liveChatDesc: string;
    startChat: string;
    formTitle: string;
    formSubtitle: string;
    fullName: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    department: string;
    selectDepartment: string;
    submitBtn: string;
    privacyNote: string;
  };
  // Footer
  footer: {
    stayInformed: string;
    newsletterSubtitle: string;
    emailPlaceholder: string;
    subscribe: string;
    brandDescription: string;
    quickLinks: string;
    ourServices: string;
    patientResources: string;
    contactUs: string;
    privacyPolicy: string;
    termsOfService: string;
    hipaa: string;
    accessibility: string;
    copyright: string;
    patientResourceLinks: Array<{ label: string; href: string }>;
  };
  // Common
  common: {
    available247: string;
  };
}
