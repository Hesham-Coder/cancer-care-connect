import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  variant?: "light" | "dark";
  className?: string;
}

const LanguageToggle = ({ variant = "dark", className = "" }: LanguageToggleProps) => {
  const { lang, toggleLang } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLang}
      className={`gap-1.5 rounded-full font-medium transition-all ${
        variant === "light"
          ? "text-primary-foreground/90 hover:bg-white/10 hover:text-primary-foreground"
          : "text-foreground/80 hover:bg-muted hover:text-foreground"
      } ${className}`}
      aria-label={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-semibold">
        {lang === "en" ? "العربية" : "English"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
