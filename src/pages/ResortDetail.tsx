import { useParams } from "react-router-dom";
import { Check, Clock, Shield, X, ChevronLeft, ChevronRight } from "lucide-react";
import ContactCTAs from "@/components/ContactCTAs";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resorts } from "@/data/resorts";
import { useState, useEffect, useCallback } from "react";
import galleryImages from "@/data/galleryImages";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const ResortDetail = () => {
  const { id } = useParams();
  const resort = resorts.find((r) => r.id === id);
  const [assetBanner, setAssetBanner] = useState<string | null>(null);
  const [galleryImagesList, setGalleryImagesList] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!resort) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Resort Not Found</h1>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hi, I want to book a stay at ${resort.name} in Dandeli. Can you provide more details?`;

  // Load gallery images - use resort specific images folder if available, otherwise use random images
  useEffect(() => {
    let mounted = true;
    async function loadGalleryImages() {
      try {
        // Check if this is Resort 1 (jungle-paradise)
        if (resort?.id === "jungle-paradise") {
          // Load images from "resort 1 images" folder
          const modules = import.meta.glob('/src/assets/resort 1 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const images: string[] = Object.keys(modules)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
            .map((p) => (modules[p] as { default: string }).default)
            .filter(Boolean);
          
          // Exclude hero image from gallery
          const galleryImages = images.filter(img => !img.includes('hero'));
          
          if (mounted) {
            setGalleryImagesList(galleryImages);
          }
        } else if (resort?.id === "riverside-retreat") {
          // Load images from "resort 2 images" folder
          const modules = import.meta.glob('/src/assets/resort 2 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const images: string[] = Object.keys(modules)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
            .map((p) => (modules[p] as { default: string }).default)
            .filter(Boolean);
          
          // Exclude hero image from gallery
          const galleryImages = images.filter(img => !img.includes('hero'));
          
          if (mounted) {
            setGalleryImagesList(galleryImages);
          }
        } else if (resort?.id === "adventure-camp") {
          // Load images from "resort 3 images" folder
          const modules = import.meta.glob('/src/assets/resort 3 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const images: string[] = Object.keys(modules)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
            .map((p) => (modules[p] as { default: string }).default)
            .filter(Boolean);
          
          // Exclude hero image from gallery
          const galleryImages = images.filter(img => !img.includes('hero'));
          
          if (mounted) {
            setGalleryImagesList(galleryImages);
          }
        } else if (resort?.id === "forest-haven") {
          // Load images from "resort 4 images" folder
          const modules = import.meta.glob('/src/assets/resort 4 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const images: string[] = Object.keys(modules)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
            .map((p) => (modules[p] as { default: string }).default)
            .filter(Boolean);
          
          // Exclude hero image from gallery
          const galleryImages = images.filter(img => !img.includes('hero'));
          
          if (mounted) {
            setGalleryImagesList(galleryImages);
          }
        } else if (resort?.id === "kali-riverside") {
          // Load images from "resort 5 images" folder
          const modules = import.meta.glob('/src/assets/resort 5 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const images: string[] = Object.keys(modules)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
            .map((p) => (modules[p] as { default: string }).default)
            .filter(Boolean);
          
          // Exclude hero image from gallery
          const galleryImages = images.filter(img => !img.includes('hero'));
          
          if (mounted) {
            setGalleryImagesList(galleryImages);
          }
        } else if (resort?.id === "mountain-view") {
          // Load images from "resort 6 images" folder
          const modules = import.meta.glob('/src/assets/resort 6 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const images: string[] = Object.keys(modules)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
            .map((p) => (modules[p] as { default: string }).default)
            .filter(Boolean);
          
          // Exclude hero image from gallery
          const galleryImages = images.filter(img => !img.includes('hero'));
          
          if (mounted) {
            setGalleryImagesList(galleryImages);
          }
        } else {
          // For other resorts, use random images from general gallery
          const allImages = Array.isArray(galleryImages) ? galleryImages.slice() : [];
          // Shuffle and pick 5 random images
          const shuffled = [...allImages].sort(() => Math.random() - 0.5);
          if (mounted) {
            setGalleryImagesList(shuffled.slice(0, 5));
          }
        }
      } catch (err) {
        console.error("Failed to load gallery images:", err);
        if (mounted) {
          setGalleryImagesList([]);
        }
      }
    }
    loadGalleryImages();
    return () => {
      mounted = false;
    };
  }, [resort?.id]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    setSelectedImageIndex((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? galleryImagesList.length - 1 : prev - 1;
      } else {
        return prev === galleryImagesList.length - 1 ? 0 : prev + 1;
      }
    });
  }, [galleryImagesList.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, navigateImage, closeLightbox]);

  useEffect(() => {
    let mounted = true;
    async function loadAssets() {
      if (!resort) return;
      
      // For Resort 1, use images from "resort 1 images" folder
      if (resort.id === "jungle-paradise") {
        try {
          const modules = import.meta.glob('/src/assets/resort 1 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const entries: { path: string; url: string }[] = Object.keys(modules).map((p) => ({ path: p, url: (modules[p] as { default: string }).default }));
          entries.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" }));

          const hero = entries.find((e) => /hero/i.test(e.path));
          const heroUrl = hero ? hero.url : entries[0]?.url ?? null;

          if (mounted) {
            setAssetBanner(heroUrl);
          }
        } catch (err) {
          console.error("Failed to load resort 1 images:", err);
          if (mounted) {
            setAssetBanner(resort.bannerImage);
          }
        }
        return;
      }
      
      // For Resort 2, use images from "resort 2 images" folder
      if (resort.id === "riverside-retreat") {
        try {
          const modules = import.meta.glob('/src/assets/resort 2 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const entries: { path: string; url: string }[] = Object.keys(modules).map((p) => ({ path: p, url: (modules[p] as { default: string }).default }));
          entries.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" }));

          const hero = entries.find((e) => /hero/i.test(e.path));
          const heroUrl = hero ? hero.url : entries[0]?.url ?? null;

          if (mounted) {
            setAssetBanner(heroUrl);
          }
        } catch (err) {
          console.error("Failed to load resort 2 images:", err);
          if (mounted) {
            setAssetBanner(resort.bannerImage);
          }
        }
        return;
      }
      
      // For Resort 3, use images from "resort 3 images" folder
      if (resort.id === "adventure-camp") {
        try {
          const modules = import.meta.glob('/src/assets/resort 3 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const entries: { path: string; url: string }[] = Object.keys(modules).map((p) => ({ path: p, url: (modules[p] as { default: string }).default }));
          entries.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" }));

          const hero = entries.find((e) => /hero/i.test(e.path));
          const heroUrl = hero ? hero.url : entries[0]?.url ?? null;

          if (mounted) {
            setAssetBanner(heroUrl);
          }
        } catch (err) {
          console.error("Failed to load resort 3 images:", err);
          if (mounted) {
            setAssetBanner(resort.bannerImage);
          }
        }
        return;
      }
      
      // For Resort 4, use images from "resort 4 images" folder
      if (resort.id === "forest-haven") {
        try {
          const modules = import.meta.glob('/src/assets/resort 4 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const entries: { path: string; url: string }[] = Object.keys(modules).map((p) => ({ path: p, url: (modules[p] as { default: string }).default }));
          entries.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" }));

          const hero = entries.find((e) => /hero/i.test(e.path));
          const heroUrl = hero ? hero.url : entries[0]?.url ?? null;

          if (mounted) {
            setAssetBanner(heroUrl);
          }
        } catch (err) {
          console.error("Failed to load resort 4 images:", err);
          if (mounted) {
            setAssetBanner(resort.bannerImage);
          }
        }
        return;
      }
      
      // For Resort 5, use images from "resort 5 images" folder
      if (resort.id === "kali-riverside") {
        try {
          const modules = import.meta.glob('/src/assets/resort 5 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const entries: { path: string; url: string }[] = Object.keys(modules).map((p) => ({ path: p, url: (modules[p] as { default: string }).default }));
          entries.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" }));

          const hero = entries.find((e) => /hero/i.test(e.path));
          const heroUrl = hero ? hero.url : entries[0]?.url ?? null;

          if (mounted) {
            setAssetBanner(heroUrl);
          }
        } catch (err) {
          console.error("Failed to load resort 5 images:", err);
          if (mounted) {
            setAssetBanner(resort.bannerImage);
          }
        }
        return;
      }
      
      // For Resort 6, use images from "resort 6 images" folder
      if (resort.id === "mountain-view") {
        try {
          const modules = import.meta.glob('/src/assets/resort 6 images/*.{jpg,jpeg,png,webp}', { eager: true });
          const entries: { path: string; url: string }[] = Object.keys(modules).map((p) => ({ path: p, url: (modules[p] as { default: string }).default }));
          entries.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" }));

          const hero = entries.find((e) => /hero/i.test(e.path));
          const heroUrl = hero ? hero.url : entries[0]?.url ?? null;

          if (mounted) {
            setAssetBanner(heroUrl);
          }
        } catch (err) {
          console.error("Failed to load resort 6 images:", err);
          if (mounted) {
            setAssetBanner(resort.bannerImage);
          }
        }
        return;
      }
      
      // For other resorts, use the original logic
      if (!resort?.assetFolder) return;
      try {
        // load all files from the shared assets folder - must use static string for import.meta.glob
        const modules = import.meta.glob('/src/assets/resort images/*.{jpg,jpeg,png,webp}', { eager: true });
        const entries: { path: string; url: string }[] = Object.keys(modules).map((p) => ({ path: p, url: (modules[p] as { default: string }).default }));
        entries.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" }));

        // filter by assetKeyword if provided (filenames contain resort identifiers)
        let filtered = entries;
        if (resort.assetKeyword) {
          const key = resort.assetKeyword.toLowerCase();
          filtered = entries.filter((e) => e.path.toLowerCase().includes(key));
        }

        // fallback to all entries if none matched the keyword
        if (!filtered.length) filtered = entries;

        const hero = filtered.find((e) => /hero/i.test(e.path));
        const heroUrl = hero ? hero.url : filtered[0]?.url ?? null;

        if (mounted) {
          setAssetBanner(heroUrl);
        }
      } catch (err) {
        console.error("Failed to load asset folder for resort:", resort?.assetFolder, err);
        if (mounted) {
          setAssetBanner(resort.bannerImage);
        }
      }
    }
    loadAssets();
    return () => {
      mounted = false;
    };
  }, [resort?.id, resort?.assetFolder, resort?.assetKeyword, resort?.bannerImage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full mt-0">
        <img
          src={assetBanner ?? resort.bannerImage}
          alt={resort.name}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-overlay z-10" />

        {/* Back button removed site-wide per request */}

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white z-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white">{resort.name}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">{resort.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        {/* Price & Amenities Section */}
        <AnimateOnScroll animationType="slideUp" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            <Card className="lg:col-span-2 p-4 sm:p-6 md:p-8 shadow-medium border-0 relative overflow-hidden">
              <div className="flex items-start justify-between mb-4 sm:mb-6 gap-4">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Starting from</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{resort.price}</p>
                </div>
                {/* CTAs removed from Pricing card - centralized in ContactCTAs section */}
              </div>

            <div className="border-t pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {resort.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 shadow-medium border-0 bg-gradient-card">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Timings
            </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{resort.timings}</p>

              <div className="flex flex-col gap-2 sm:gap-3">
                <p className="text-xs sm:text-sm text-muted-foreground">Timings and availability are shown here. Use the contact section below to reach us.</p>
              </div>
          </Card>
          </div>
        </AnimateOnScroll>

        {/* Gallery Section */}
        {galleryImagesList.length > 0 && (
          <AnimateOnScroll animationType="fadeIn" delay={100}>
            <Card className="p-4 sm:p-6 mb-8 sm:mb-10 md:mb-12 shadow-xl border-0 bg-card">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Gallery</h2>
              <div className="relative">
                <Carousel>
                  <CarouselPrevious className="hidden md:block bg-white/5 text-white hover:bg-white/10" />
                  <CarouselContent className="items-stretch">
                    {galleryImagesList.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div
                          className="relative h-44 sm:h-56 md:h-72 rounded-xl overflow-hidden cursor-pointer group shadow-soft hover:shadow-2xl transition-all duration-300"
                          onClick={() => openLightbox(index)}
                        >
                          <img
                            src={image}
                            alt={`${resort.name} gallery ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white font-semibold">Click to enlarge</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext className="hidden md:block bg-white/5 text-white hover:bg-white/10" />
                </Carousel>
              </div>
            </div>
          </Card>
          </AnimateOnScroll>
        )}

        {/* Dedicated Contact CTAs section */}
        <AnimateOnScroll animationType="slideUp" delay={150}>
          <ContactCTAs message={whatsappMessage} resortName={resort.name} />
        </AnimateOnScroll>

        {/* Package Details */}
        <AnimateOnScroll animationType="slideUp" delay={200}>
          <Card className="p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 shadow-medium border-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Package Inclusions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {resort.inclusions.map((inclusion, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-muted-foreground">{inclusion}</span>
              </div>
            ))}
          </div>
        </Card>
        </AnimateOnScroll>

        {/* Terms & Conditions */}
        <AnimateOnScroll animationType="fadeIn" delay={250}>
          <Card className="p-4 sm:p-6 md:p-8 shadow-medium border-0 bg-muted/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Terms & Conditions</h2>
          <ul className="space-y-2 sm:space-y-3">
            {resort.terms.map((term, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-sm sm:text-base text-muted-foreground">{term}</span>
              </li>
            ))}
          </ul>
        </Card>
        </AnimateOnScroll>
      </div>

      {/* Lightbox */}
      {lightboxOpen && galleryImagesList.length > 0 && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10 p-2 rounded-lg hover:bg-white/10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 text-white hover:text-primary transition-colors z-10 p-2 rounded-lg hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            className="absolute right-4 text-white hover:text-primary transition-colors z-10 p-2 rounded-lg hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div onClick={(e) => e.stopPropagation()} className="max-w-7xl w-full h-full flex items-center justify-center">
            <img
              src={galleryImagesList[selectedImageIndex]}
              alt={`Gallery ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImageIndex + 1} / {galleryImagesList.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ResortDetail;
