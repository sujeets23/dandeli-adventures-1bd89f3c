import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dandeli.jpg";
import heroSliding1 from "@/assets/hero sliding images/hero slide 1.jpg";
import heroSliding2 from "@/assets/hero sliding images/hero slide 2.jpg";
import heroSliding3 from "@/assets/hero sliding images/hero slide 3.jpg";
import heroSliding4 from "@/assets/hero sliding images/hero slide 4.jpg";
import heroSliding5 from "@/assets/hero sliding images/hero slide 5.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const heroSlides = [
    heroSliding1,
    heroSliding2,
    heroSliding3,
    heroSliding4,
    heroSliding5,
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!autoPlayEnabled) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length, autoPlayEnabled]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setAutoPlayEnabled(false);
    setTimeout(() => setAutoPlayEnabled(true), 5000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
  };

  useEffect(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setAutoPlayEnabled(false);
      setTimeout(() => setAutoPlayEnabled(true), 5000);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setAutoPlayEnabled(false);
      setTimeout(() => setAutoPlayEnabled(true), 5000);
    }
  }, [touchStart, touchEnd, heroSlides.length]);

  const scrollToResorts = () => {
    document.getElementById("resorts")?.scrollIntoView({ behavior: "smooth" });
  };

  

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 parallax hero-slide-transition"
        style={{
          backgroundImage: `url(${heroSlides[currentSlide]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
      
      <div className="absolute inset-0 bg-gradient-overlay" />

      {/* Decorative floating bubbles (subtle) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-bubbles">
          <span className="bubble b1" />
          <span className="bubble b2" />
          <span className="bubble b3" />
          <span className="bubble b4" />
          <span className="bubble b5" />
          <span className="bubble b6" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 fade-in px-2">
          Discover Dandeli's
          <span className="block text-white mt-1 sm:mt-2">Adventure Paradise</span>
        </h1>
        
        <div className="text-sm sm:text-base text-white/80 mb-2 fade-in" style={{ animationDelay: "0.15s" }}>
          Experience Nature's Paradise
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-10 max-w-3xl fade-in px-2" style={{ animationDelay: "0.2s" }}>
          Immerse yourself in pristine nature, thrilling adventures, and luxury resorts nestled in the heart of the Western Ghats
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in w-full sm:w-auto px-2" style={{ animationDelay: "0.4s" }}>
          <Button 
            onClick={scrollToResorts}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-large w-full sm:w-auto"
          >
            Explore Dandeli Resorts
          </Button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
