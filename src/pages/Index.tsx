import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResortCard from "@/components/ResortCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Activities from "@/components/Activities";
import { resorts } from "@/data/resorts";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <section id="resorts" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Featured Dandeli Resorts</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">Handpicked luxury resorts and adventure camps for your perfect getaway</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resorts.map((resort) => (
              <ResortCard key={resort.id} id={resort.id} name={resort.name} description={resort.description} price={resort.price} image={resort.image} />
            ))}
          </div>
        </div>
      </section>

      <div className="fade-in slide-up">
        <Activities />
      </div>

      <div id="why-choose-us" className="fade-in slide-up">
        <WhyChooseUs />
      </div>

      <div id="testimonials" className="fade-in slide-up">
        <Testimonials />
      </div>

      <div id="faq" className="fade-in slide-up">
        <FAQ />
      </div>

      <div className="fade-in slide-up">
        <FinalCTA />
      </div>

      <div className="fade-in slide-up">
        <Footer />
      </div>

      <CallButton variant="floating" />
      <WhatsAppButton variant="floating" />
    </main>
  );
};

export default Index;
