import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";
import { Phone } from "lucide-react";

interface ResortCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const ResortCard = ({ id, name, description, price, image }: ResortCardProps) => {
  return (
    <Link to={`/resort/${id}`} className="block group">
      <Card className="overflow-hidden border-0 shadow-soft hover:shadow-large transition-all duration-500 bg-gradient-card slide-up cursor-pointer">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accent text-accent-foreground px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-medium">
            {price}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
            {description}
          </p>

          <div className="mt-2 sm:mt-3 grid grid-cols-1 gap-2 sm:gap-3">
            <Button variant="default" size="sm" className="w-full text-sm sm:text-base py-2 sm:py-2.5">
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ResortCard;
