// Site-wide constants
export const SITE_NAME = "Cancer Center";
export const SITE_TAGLINE = "Comprehensive Care";
export const PHONE_NUMBER = "1-800-CANCER-CARE";
export const PHONE_HREF = "tel:+18001234567";
export const EMAIL = "info@cancercenter.com";
export const ADDRESS_LINE_1 = "123 Medical Center Drive";
export const ADDRESS_LINE_2 = "Healthcare City, HC 12345";
export const YEAR_FOUNDED = 1995;
export const CURRENT_YEAR = new Date().getFullYear();

export const SOCIAL_LINKS = {
  facebook: "#",
  twitter: "#",
  linkedin: "#",
  instagram: "#",
} as const;

export const NAV_LINKS = [
  { key: "about", href: "#about" },
  { key: "specialties", href: "#specialties" },
  { key: "doctors", href: "#doctors" },
  { key: "resources", href: "#resources" },
  { key: "contact", href: "#contact" },
] as const;

export const DEPARTMENTS = [
  "breast",
  "lung",
  "colorectal",
  "prostate",
  "blood",
  "pediatric",
] as const;
