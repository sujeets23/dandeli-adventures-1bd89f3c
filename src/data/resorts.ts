import resortJungle from "@/assets/resort-jungle.jpg";
import resortRiverside from "@/assets/resort-riverside.jpg";
import resortAdventure from "@/assets/resort-adventure.jpg";

export interface Resort {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  bannerImage: string;
  amenities: string[];
  inclusions: string[];
  timings: string;
  terms: string[];
  gallery: string[];
}

export const resorts: Resort[] = [
  {
    id: "jungle-paradise",
    name: "Jungle Paradise Resort",
    description: "Luxury wooden cottages nestled in dense forest with river views and premium amenities",
    price: "₹3,999/night",
    image: resortJungle,
    bannerImage: resortJungle,
    amenities: [
      "Air-conditioned cottages",
      "River-facing balconies", 
      "In-house restaurant",
      "Free WiFi",
      "24/7 hot water",
      "Swimming pool"
    ],
    inclusions: [
      "White water rafting (Grade 2-3)",
      "Kayaking session",
      "Jungle safari",
      "Bird watching tour",
      "Bonfire with music",
      "All meals (breakfast, lunch, dinner)",
      "Safety equipment & expert guides"
    ],
    timings: "Check-in: 12:00 PM | Check-out: 11:00 AM",
    terms: [
      "Minimum 2 nights booking required during peak season",
      "50% advance payment required for confirmation",
      "Cancellation 7 days prior - full refund",
      "Cancellation 3-7 days prior - 50% refund",
      "Activities subject to weather conditions",
      "Valid ID proof required at check-in"
    ],
    gallery: [resortJungle, resortRiverside, resortAdventure]
  },
  {
    id: "riverside-retreat",
    name: "Riverside Retreat",
    description: "Modern resort with infinity pool, spa facilities, and stunning mountain backdrop views",
    price: "₹4,499/night",
    image: resortRiverside,
    bannerImage: resortRiverside,
    amenities: [
      "Deluxe AC rooms",
      "Infinity pool",
      "Spa & wellness center",
      "Multi-cuisine restaurant",
      "Gym facilities",
      "Private beach access"
    ],
    inclusions: [
      "White water rafting expedition",
      "Coracle ride",
      "Zip-lining adventure",
      "Nature trekking",
      "Campfire evening",
      "Complimentary breakfast & dinner",
      "Professional photography session"
    ],
    timings: "Check-in: 1:00 PM | Check-out: 11:00 AM",
    terms: [
      "Advance booking recommended",
      "30% advance for reservation",
      "Free cancellation up to 10 days before arrival",
      "Children below 5 years complimentary",
      "Pet-friendly (on request)",
      "Adventure activities for age 10+ years"
    ],
    gallery: [resortRiverside, resortJungle, resortAdventure]
  },
  {
    id: "adventure-camp",
    name: "Wild Adventure Camp",
    description: "Authentic camping experience with luxury tents, bonfire nights, and thrilling adventure packages",
    price: "₹2,999/night",
    image: resortAdventure,
    bannerImage: resortAdventure,
    amenities: [
      "Luxury safari tents",
      "Attached washrooms",
      "Outdoor dining area",
      "Bonfire pit",
      "Stargazing deck",
      "Adventure sports equipment"
    ],
    inclusions: [
      "River rafting (full day)",
      "Kayaking & canoeing",
      "Rock climbing",
      "Rappelling",
      "Forest trekking",
      "BBQ dinner with bonfire",
      "Buffet meals included"
    ],
    timings: "Check-in: 11:00 AM | Check-out: 10:00 AM",
    terms: [
      "Ideal for groups and corporate outings",
      "Minimum 1 night stay",
      "40% advance payment required",
      "Cancellation charges apply after booking",
      "Medical fitness required for adventure activities",
      "Alcohol not permitted in camping area"
    ],
    gallery: [resortAdventure, resortJungle, resortRiverside]
  },
  {
    id: "forest-haven",
    name: "Forest Haven Lodge",
    description: "Eco-friendly lodge with treehouse stays and immersive nature experiences",
    price: "₹3,499/night",
    image: resortJungle,
    bannerImage: resortJungle,
    amenities: [
      "Treehouse accommodations",
      "Eco-friendly facilities",
      "Organic farm restaurant",
      "Nature library",
      "Yoga & meditation area",
      "Wildlife observation deck"
    ],
    inclusions: [
      "Guided nature walks",
      "Bird watching expedition",
      "Kayaking on calm waters",
      "Village tour",
      "Sunset river cruise",
      "Farm-to-table dining experience",
      "Morning yoga sessions"
    ],
    timings: "Check-in: 12:00 PM | Check-out: 11:00 AM",
    terms: [
      "Eco-conscious travelers preferred",
      "Single-use plastic not allowed",
      "Advance payment 40% required",
      "Flexible cancellation policy",
      "Perfect for families with children",
      "Photography equipment available for rent"
    ],
    gallery: [resortJungle, resortAdventure, resortRiverside]
  },
  {
    id: "kali-riverside",
    name: "Kali Riverside Resort",
    description: "Premium beachfront resort with water sports and luxury accommodation facilities",
    price: "₹5,299/night",
    image: resortRiverside,
    bannerImage: resortRiverside,
    amenities: [
      "Premium suites",
      "Private balconies",
      "Fine dining restaurant",
      "Poolside bar",
      "Conference facilities",
      "Concierge services"
    ],
    inclusions: [
      "White water rafting (premium)",
      "Jet ski rides",
      "Parasailing adventure",
      "Sunset boat cruise",
      "Live entertainment",
      "All-inclusive meal plan",
      "Complimentary airport transfers"
    ],
    timings: "Check-in: 2:00 PM | Check-out: 12:00 PM",
    terms: [
      "Premium luxury experience",
      "Advance booking mandatory",
      "50% payment upfront",
      "Cancellation allowed 15 days prior",
      "Couples and honeymooners special packages",
      "Customized itineraries available"
    ],
    gallery: [resortRiverside, resortAdventure, resortJungle]
  },
  {
    id: "mountain-view",
    name: "Mountain View Cottages",
    description: "Hilltop cottages with panoramic views, cozy interiors, and peaceful ambiance",
    price: "₹3,299/night",
    image: resortAdventure,
    bannerImage: resortAdventure,
    amenities: [
      "Valley-view cottages",
      "Fireplace in rooms",
      "Garden restaurant",
      "Barbecue area",
      "Children's play area",
      "Parking facilities"
    ],
    inclusions: [
      "Mountain trekking",
      "Valley rappelling",
      "River crossing activities",
      "Camping under stars",
      "Local cultural performances",
      "Homestyle cooking classes",
      "Nature photography tour"
    ],
    timings: "Check-in: 11:00 AM | Check-out: 10:00 AM",
    terms: [
      "Family-friendly environment",
      "Group discounts available",
      "30% booking amount required",
      "Full refund on cancellation 5+ days prior",
      "Special rates for extended stays",
      "Children activity programs included"
    ],
    gallery: [resortAdventure, resortRiverside, resortJungle]
  }
];
