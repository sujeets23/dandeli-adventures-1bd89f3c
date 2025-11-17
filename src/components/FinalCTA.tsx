import WhatsAppButton from "./WhatsAppButton";
import { Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles className="h-5 w-5" />
          <span className="font-medium">Limited Time Offers Available</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready for Your Dandeli Adventure?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Don't miss out on creating unforgettable memories in nature's paradise. Book your dream resort today!
        </p>
        
        <WhatsAppButton 
          message="Hi! I want to plan my Dandeli trip. Can you help me choose the perfect resort and package?"
          className="text-lg px-10 py-7 shadow-large"
        />
      </div>
    </section>
  );
};

export default FinalCTA;
