import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    text: "An absolutely amazing experience! The rafting was thrilling and the resort was pristine. Highly recommend for adventure lovers!"
  },
  {
    name: "Rahul Desai",
    location: "Mumbai",
    rating: 5,
    text: "Perfect getaway from city life. Beautiful forests, great hospitality, and unforgettable memories. Will definitely visit again!"
  },
  {
    name: "Anita Patel",
    location: "Pune",
    rating: 5,
    text: "Family-friendly and well-organized. The kids loved kayaking and we enjoyed the peaceful resort ambiance. 5 stars!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animationType="fadeIn" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Guest Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear what our happy guests have to say
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} animationType="slideUp" delay={index * 100}>
              <Card
                className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card border-0"
              >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
