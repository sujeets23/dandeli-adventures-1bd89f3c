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
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <section id="resorts" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animationType="fadeIn" delay={0}>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Featured Dandeli Resorts</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">Handpicked luxury resorts and adventure camps for your perfect getaway</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationType="slideUp" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {resorts.map((resort, index) => (
                <AnimateOnScroll key={resort.id} animationType="scale" delay={index * 50} className="h-full">
                  <ResortCard id={resort.id} name={resort.name} description={resort.description} price={resort.price} image={resort.image} />
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <AnimateOnScroll animationType="slideUp" delay={0}>
        <Activities />
      </AnimateOnScroll>

      <AnimateOnScroll id="why-choose-us" animationType="fadeIn" delay={0}>
        <WhyChooseUs />
      </AnimateOnScroll>

      <AnimateOnScroll id="testimonials" animationType="slideUp" delay={0}>
        <Testimonials />
      </AnimateOnScroll>

      <AnimateOnScroll id="faq" animationType="fadeIn" delay={0}>
        <FAQ />
      </AnimateOnScroll>

      <AnimateOnScroll animationType="slideUp" delay={0}>
        <FinalCTA />
      </AnimateOnScroll>

      <AnimateOnScroll animationType="fadeIn" delay={0}>
        <Footer />
      </AnimateOnScroll>

      <CallButton variant="floating" />
      <WhatsAppButton variant="floating" />
    </main>
  );
};

export default Index;
