import React from "react";
import { Leaf, LucideIcon, Sofa, Truck } from "lucide-react";

type Feature = {
    id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: Leaf,
    title: "Fresh Beans",
    description:
      "Directly sourced single-origin beans roasted in small batches to preserve delicate flavor notes.",
  },
  {
    id: 2,
    icon: Sofa,
    title: "Cozy Environment",
    description:
      "A sanctuary designed for focus and relaxation, blending artisanal textures with modern comfort.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Experience your rituals at home with our signature lightning-fast delivery across the city.",
  },
];
const Features = () => {
  return (
    <div className="container mx-auto py-7 my-7">
        <div className="flex justify-center items-center">

      {features.map((feature) => {
          const Icon = feature.icon;
          return (
              <div key={feature.id} className="text-center">
                <div className="w-fit mx-auto bg-secondary p-3 rounded-full">

                <Icon className="text-white"></Icon>
                </div>
                <h3 className="text-xl font-semibold text-secondary my-3">{feature.title}</h3>
                <p className="text-secondary/80">{feature.description}</p>
            </div>
        )
    })}
    </div>
    </div>
  );
};

export default Features;
