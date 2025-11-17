import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
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
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dandeli Adventures</h3>
            <p className="text-background/80 mb-6">
              Your trusted partner for unforgettable experiences in Dandeli's pristine wilderness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation("/#resorts")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Our Resorts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/#why-choose-us")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/#testimonials")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/#faq")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-background/80 hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@dandeliadventures.com" className="text-background/80 hover:text-primary transition-colors">
                    info@dandeliadventures.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="text-background/80">
                  Dandeli, Karnataka 581325
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} Dandeli Adventures. All rights reserved.
          </p>
          <p className="text-background/60 mt-2">
            Designed &amp; developed by {" "}
            <a
              href="https://dotlx.webflow.io"
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
