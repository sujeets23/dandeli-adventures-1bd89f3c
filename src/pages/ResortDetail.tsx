import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resorts } from "@/data/resorts";
import { useState } from "react";

const ResortDetail = () => {
  const { id } = useParams();
  const resort = resorts.find((r) => r.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  if (!resort) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Resort Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hi, I want to book a stay at ${resort.name} in Dandeli. Can you provide more details?`;

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <div className="relative h-[60vh] w-full mt-20">
        <img
          src={resort.bannerImage}
          alt={resort.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <Link to="/" className="absolute top-6 left-6 z-10">
          <Button variant="secondary" className="gap-2 shadow-large">
            <ArrowLeft className="h-4 w-4" />
            Back to Resorts
          </Button>
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">{resort.name}</h1>
            <p className="text-xl">{resort.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Price & Amenities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 p-8 shadow-medium border-0">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                <p className="text-4xl font-bold text-primary">{resort.price}</p>
              </div>
              <WhatsAppButton message={whatsappMessage} />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Amenities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resort.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium border-0 bg-gradient-card">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              Timings
            </h3>
            <p className="text-muted-foreground mb-6">{resort.timings}</p>
            
            <WhatsAppButton 
              message={whatsappMessage}
              className="w-full"
            />
          </Card>
        </div>

        {/* Package Details */}
        <Card className="p-8 mb-12 shadow-medium border-0">
          <h2 className="text-3xl font-bold mb-6">Package Inclusions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resort.inclusions.map((inclusion, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{inclusion}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resort.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-soft hover:shadow-large transition-all duration-300"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image}
                  alt={`${resort.name} gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">Click to enlarge</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <Card className="p-8 shadow-medium border-0 bg-muted/30">
          <h2 className="text-3xl font-bold mb-6">Terms & Conditions</h2>
          <ul className="space-y-3">
            {resort.terms.map((term, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-muted-foreground">{term}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card glass-effect border-t shadow-large p-4 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="font-bold text-xl">{resort.name}</p>
            <p className="text-primary font-semibold">{resort.price}</p>
          </div>
          <WhatsAppButton 
            message={whatsappMessage}
            className="flex-1 md:flex-initial"
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      <div className="pb-24">
        <Footer />
      </div>
    </div>
  );
};

export default ResortDetail;
