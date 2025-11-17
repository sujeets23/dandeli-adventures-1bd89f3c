import { Shield, Award, Headphones, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Safe",
    description: "Licensed resorts with verified safety standards and experienced guides"
  },
  {
    icon: Award,
    title: "Best Packages",
    description: "Curated adventure packages combining stays, activities, and meals"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for seamless booking experience"
  },
  {
    icon: ThumbsUp,
    title: "Expert Guidance",
    description: "Local expertise and personalized recommendations for your trip"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for unforgettable Dandeli adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
