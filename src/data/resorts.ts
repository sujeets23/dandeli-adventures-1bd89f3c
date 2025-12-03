import resortJungle from "@/assets/resort-jungle.jpg";
import resortRiverside from "@/assets/resort-riverside.jpg";
import resortAdventure from "@/assets/resort-adventure.jpg";
import resort1Hero from "@/assets/resort 1 images/resort 1 hero.jpg";
import resort2Hero from "@/assets/resort 2 images/resort 2 hero.jpg";
import resort3Hero from "@/assets/resort 3 images/resort 3 hero.jpg";
import resort4Hero from "@/assets/resort 4 images/resort 4 hero.jpg";
import resort5Hero from "@/assets/resort 5 images/resort 5 hero.jpg";
import resort6Hero from "@/assets/resort 6 images/resort 6 hero.jpg";
// Asset-folder imports removed (filenames contain spaces) — dynamic loader will use `assetFolder` at runtime.

export interface Resort {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  bannerImage: string;
  assetFolder?: string;
  assetKeyword?: string;
  amenities: string[];
  inclusions: string[];
  timings: string;
  terms: string[];
  gallery: string[];
}

export const resorts: Resort[] = [
  {
    id: "jungle-paradise",
    name: "Luxury stay",
    description: "Luxury wooden cottages nestled in dense forest with river views and premium amenities",
    price: "₹1,800/day",
    image: resort1Hero,
    bannerImage: resort1Hero,
    assetFolder: "resort images",
    assetKeyword: "fly wings",
    amenities: [
      "Air-conditioned cottages",
      "In-house restaurant",
      "Free WiFi",
      "24/7 hot water",
      "Swimming pool",
      "Rain Dance",
      "parking area"
    ],
    inclusions: [
      "White water rafting (Grade 2-3)",
      "Kayaking session",
      "Zorbing",
      "Boating",
      "Bonfire with music",
      "All meals (breakfast, lunch, dinner)",
      "Safety equipment & expert guides"
    ],
    timings: "Check-in: 11:00 AM | Check-out: 10:00 AM",
    terms: [
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
    name: "Premium villa",
    description: "Modern resort with infinity pool, spa facilities, and stunning mountain backdrop views",
    price: "₹1,500/day",
    image: resort2Hero,
    bannerImage: resort2Hero,
    assetFolder: "resort images",
    assetKeyword: "jungle edge",
    amenities: [
      "Deluxe AC rooms",
      "Infinity pool",
      "Free WiFi",
      "24/7 hot water",
      "parking facility",
      "Rain Dance"
    ],
    inclusions: [
      "White water rafting (Grade 2-3)",
      "Kayaking session",
      "Zorbing",
      "Boating",
      "Bonfire with music",
      "All meals (breakfast, lunch, dinner)",
      "Safety equipment & expert guides"
    ],
    timings: "Check-in: 11:00 AM | Check-out: 10:00 AM",
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
    name: "Elite residence",
    description: "Authentic camping experience with luxury tents, bonfire nights, and thrilling adventure packages",
    price: "₹1,500/day",
    image: resort3Hero,
    bannerImage: resort3Hero,
    assetFolder: "resort images",
    assetKeyword: "lake velly",
    amenities: [
      "Luxury safari tents",
      "Attached washrooms",
      "Outdoor dining area",
      "Bonfire pit",
      "Stargazing deck",
      "Adventure sports equipment",
      "Swimming pool",
      "Rain Dance",
      "parking area"
    ],
    inclusions: [
      "White water rafting (Grade 2-3)",
      "Kayaking session",
      "Zorbing",
      "Boating",
      "Bonfire with music",
      "All meals (breakfast, lunch, dinner)",
      "Safety equipment & expert guides"
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
    name: "Signature stay",
    description: "Eco-friendly lodge with treehouse stays and immersive nature experiences",
    price: "₹1,000/day",
    image: resort4Hero,
    bannerImage: resort4Hero,
    assetFolder: "resort images",
    assetKeyword: "river point",
    amenities: [
      "Treehouse accommodations",
      "Eco-friendly facilities",
      "Swimming pool",
      "Rain Dance",
      "Dining area",
      "parking area"
    ],
    inclusions: [
      "White water rafting (Grade 2-3)",
      "Kayaking session",
      "Zorbing",
      "Boating",
      "Bonfire with music",
      "All meals (breakfast, lunch, dinner)",
      "Safety equipment & expert guides"
    ],
    timings: "Check-in: 11:00 AM | Check-out: 10:00 AM",
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
    name: "Majestic stay",
    description: "Premium beachfront resort with water sports and luxury accommodation facilities",
    price: "₹1,300/day",
    image: resort5Hero,
    bannerImage: resort5Hero,
    assetFolder: "resort images",
    assetKeyword: "royal nirvana",
    amenities: [
      "Premium suites",
      "Swimming pool",
      "Rain Dance",
      "Tenthouse",
      "AC & non-AC cottage",
      "parking area"
    ],
    inclusions: [
      "White water rafting (Grade 2-3)",
      "Kayaking session",
      "Zorbing",
      "Boating",
      "Bonfire with music",
      "All meals (breakfast, lunch, dinner)",
      "Safety equipment & expert guides"
    ],
    timings: "Check-in: 11:00 AM | Check-out: 10:00 AM",
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
    name: "Grand residence",
    description: "Hilltop cottages with panoramic views, cozy interiors, and peaceful ambiance",
    price: "₹1,200/day",
    image: resort6Hero,
    bannerImage: resort6Hero,
    assetFolder: "resort images",
    assetKeyword: "fly wings",
    amenities: [
      "Valley-view cottages",
      "Fireplace in rooms",
      "Garden restaurant",
      "Barbecue area",
      "Children's play area",
      "Swimming pool",
      "Rain Dance",
      "parking area"
    ],
    inclusions: [
      "White water rafting (Grade 2-3)",
      "Kayaking session",
      "Zorbing",
      "Boating",
      "Bonfire with music",
      "All meals (breakfast, lunch, dinner)",
      "Safety equipment & expert guides"
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
