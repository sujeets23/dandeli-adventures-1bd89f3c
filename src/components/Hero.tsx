import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dandeli.jpg";

const Hero = () => {
  const scrollToResorts = () => {
    document.getElementById("resorts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in">
          Discover Dandeli's
          <span className="block text-secondary mt-2">Adventure Paradise</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl fade-in" style={{ animationDelay: "0.2s" }}>
          Immerse yourself in pristine nature, thrilling adventures, and luxury resorts nestled in the heart of the Western Ghats
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            onClick={scrollToResorts}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-large"
          >
            Explore Dandeli Resorts
          </Button>
        </div>

        <button
          onClick={scrollToResorts}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
