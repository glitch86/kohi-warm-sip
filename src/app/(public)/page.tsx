
import Features from "@/components/sections/home/Features";
import Hero from "@/components/sections/home/Hero";
import TopPicks from "@/components/sections/home/TopPicks";
import React from "react";

const page = () => {
  return (
    <div className="">
     <Hero></Hero>
     <TopPicks></TopPicks>
     <Features></Features>
    </div>
  );
};

export default page;
