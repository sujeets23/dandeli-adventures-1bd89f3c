import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallButtonProps {
  phoneNumber?: string;
  className?: string;
  variant?: "default" | "floating";
}

const CallButton = ({ 
  phoneNumber = "+918217871420",
  className = "",
  variant = "default"
}: CallButtonProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleCall}
        className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-large transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        aria-label="Call us now"
      >
        <Phone className="h-7 w-7" />
      </button>
    );
  }

  return (
    <Button
      onClick={handleCall}
      className={`bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 text-white gap-2 ${className}`}
      size="lg"
    >
      <Phone className="h-5 w-5" />
      Call Us
    </Button>
  );
};

export default CallButton;
