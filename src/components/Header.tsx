import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [forceTransparent, setForceTransparent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // If we're on a hero/landing route (home or resort), keep header transparent
      // until user scrolls past the threshold. Otherwise behave normally.
      if (location.pathname === "/" || location.pathname.startsWith("/resort")) {
        setForceTransparent(!scrolled);
      } else {
        setForceTransparent(false);
      }
    };

    // initialize
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Ensure header stays transparent when landing on pages with hero banners
  // (home and resort detail). This avoids the header showing the glass/bg
  // on route change if the page is initially scrolled by the browser.
  useEffect(() => {
    // When route changes, set forceTransparent based on route.
    if (location.pathname === "/" || location.pathname.startsWith("/resort")) {
      setForceTransparent(true);
      // ensure scrolled flag reflects current scroll position
      setIsScrolled(window.scrollY > 50);
    } else {
      setForceTransparent(false);
    }
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Resorts", href: "/#resorts" },
    { name: "Activities", href: "/#activities" },
    { name: "Why Choose Us", href: "/#why-choose-us" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && !forceTransparent
          ? "glass-effect shadow-medium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="group-hover:scale-110 transition-transform duration-300">
              <img src={logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full object-cover" />
            </div>
            <div className="min-w-0">
              <h1 className={`font-bold text-sm sm:text-lg md:text-xl truncate max-w-[160px] sm:max-w-[220px] md:max-w-none ${isScrolled && !forceTransparent ? "text-foreground" : "text-white"}`}>
                Dandeli budget friendly resorts
              </h1>
              <p className={`hidden sm:block text-xs sm:text-sm truncate max-w-[180px] sm:max-w-[220px] md:max-w-none ${isScrolled && !forceTransparent ? "text-muted-foreground" : "text-white/80"}`}>
                Experience Nature's Paradise
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
                className={`font-medium transition-colors hover:text-amber-300 ${
                  isScrolled && !forceTransparent ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled && !forceTransparent
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 glass-effect rounded-xl shadow-large animate-fade-in">
            <nav className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#")) {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-4 rounded-lg font-medium text-foreground hover:bg-primary/10 hover:text-amber-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
