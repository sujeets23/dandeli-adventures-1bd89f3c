import { Card } from "@/components/ui/card";
import zorbingImage from "@/assets/Zorbing.jpg";
import kayakingImage from "@/assets/Kayaking.jpg";
import raftingImage from "@/assets/Rafting.jpg";
import riverSwimmingImage from "@/assets/River swimming.jpg";
import supaDamImage from "@/assets/Supa dam.jpg";
import syntheriRocksImage from "@/assets/Syntheri rocks.jpg";
import backWaterImage from "@/assets/Back water.jpg";
import moulangiEcoParkImage from "@/assets/Moulangi eco park.jpg";
import skiesPointImage from "@/assets/Skies point.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const activities = [
  {
    name: "Zorbing",
    description: "Experience the thrill of rolling down hills in a giant inflatable ball, a fun activity for all ages",
    image: zorbingImage,
    highlight: "Fun Activity"
  },
  {
    name: "Kayaking",
    description: "Paddle through calm waters and enjoy the serene beauty of Dandeli's rivers at your own pace",
    image: kayakingImage,
    highlight: "Water Sports"
  },
  {
    name: "Rafting",
    description: "Experience thrilling rapids on the Kali River with Grade 2-3 rapids suitable for all skill levels",
    image: raftingImage,
    highlight: "Most Popular"
  },
  {
    name: "River Swimming",
    description: "Take a refreshing dip in the pristine river waters surrounded by nature's beauty",
    image: riverSwimmingImage,
    highlight: "Relaxing"
  },
  {
    name: "Supa Dam",
    description: "Visit the magnificent Supa Dam and witness the engineering marvel amidst scenic landscapes",
    image: supaDamImage,
    highlight: "Sightseeing"
  },
  {
    name: "Syntheri Rocks",
    description: "Explore the stunning limestone caves and rock formations at Syntheri, a natural wonder",
    image: syntheriRocksImage,
    highlight: "Nature"
  },
  {
    name: "Back Water",
    description: "Enjoy peaceful backwater experiences with calm waters perfect for boating and relaxation",
    image: backWaterImage,
    highlight: "Scenic"
  },
  {
    name: "Moulangi Eco Park",
    description: "Discover the rich biodiversity and natural beauty of Moulangi Eco Park with guided tours",
    image: moulangiEcoParkImage,
    highlight: "Wildlife"
  },
  {
    name: "Sykes Point",
    description: "Reach new heights at Sykes Point and enjoy breathtaking panoramic views of Dandeli",
    image: skiesPointImage,
    highlight: "Viewpoint"
  }
];

const Activities = () => {
  return (
    <section id="activities" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animationType="fadeIn" delay={0}>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Adventure Activities</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Thrilling experiences and outdoor adventures await you in Dandeli
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activities.map((activity, index) => {
            return (
              <AnimateOnScroll key={index} animationType="scale" delay={index * 50}>
                <Card
                  className="overflow-hidden shadow-medium border-0 hover:shadow-large transition-all duration-300 group hover:-translate-y-2 bg-card"
                >
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                      {activity.highlight}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{activity.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </Card>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;

