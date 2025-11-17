import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  className?: string;
  variant?: "default" | "floating";
}

const WhatsAppButton = ({ 
  message = "Hi, I want to book a resort in Dandeli!", 
  phoneNumber = "919876543210",
  className = "",
  variant = "default"
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-large transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 ${className}`}
      size="lg"
    >
      <MessageCircle className="h-5 w-5" />
      Book on WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
