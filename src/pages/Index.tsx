import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResortCard from "@/components/ResortCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { resorts } from "@/data/resorts";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      <section id="resorts" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Dandeli Resorts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked luxury resorts and adventure camps for your perfect getaway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resorts.map((resort, index) => (
              <ResortCard
                key={resort.id}
                id={resort.id}
                name={resort.name}
                description={resort.description}
                price={resort.price}
                image={resort.image}
              />
            ))}
          </div>
        </div>
      </section>

      <div id="why-choose-us">
        <WhyChooseUs />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <FinalCTA />

      <Footer />

      <WhatsAppButton variant="floating" />
    </main>
  );
};

export default Index;
