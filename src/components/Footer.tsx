import { Phone, Mail, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Already on home page, just scroll
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <footer className="bg-foreground text-background py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Dandeli Adventures</h3>
            <p className="text-sm sm:text-base text-background/80">
              Your trusted partner for unforgettable experiences in Dandeli's pristine wilderness.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-3 flex flex-col items-center">
              <li>
                <button 
                  onClick={() => handleNavigation("/#resorts")}
                  className="text-background/80 hover:text-amber-300 transition-colors"
                >
                  Our Resorts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/#why-choose-us")}
                  className="text-background/80 hover:text-amber-300 transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/#testimonials")}
                  className="text-background/80 hover:text-amber-300 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/#faq")}
                  className="text-background/80 hover:text-amber-300 transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 flex flex-col items-center text-center">
              <li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-sm sm:text-base text-background/80 hover:text-amber-300 transition-colors break-all">
                    +91 82178 85207
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <div>
                  <a href="mailto:dandelibudgetfriendlyresort@gmail.com" className="text-sm sm:text-base text-background/80 hover:text-amber-300 transition-colors break-all">
                    dandelibudgetfriendlyresort@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <div className="text-sm sm:text-base text-background/80">
                  Dandeli, Karnataka 581325
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-background/60">
            © {new Date().getFullYear()} Dandeli Adventures. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-background/60 mt-2">
            Site Designed &amp; developed by {" "}
            <a
              href="https://dotlab.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-primary transition-colors underline"
            >
              Dot labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
