import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-large transition-all duration-500 bg-gradient-card slide-up">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-medium">
          {price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-2">
          {description}
        </p>
        
        <Link to={`/resort/${id}`}>
          <Button 
            className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            View Details
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </Link>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <WhatsAppButton
            message={`I wanted to book this resort: ${name}`}
            className="w-full"
          />
          <a
            href="tel:+918217885207"
            className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold shadow-medium hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ResortCard;
