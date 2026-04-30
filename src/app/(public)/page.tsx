
import Features from "@/components/sections/home/Features";
import Hero from "@/components/sections/home/Hero";
import Testimony from "@/components/sections/home/Testimony";
import TopPicks from "@/components/sections/home/TopPicks";
import React from "react";

const page = () => {
  return (
    <div className="">
     <Hero></Hero>
     <TopPicks></TopPicks>
     <Features></Features>
     <Testimony></Testimony>
    </div>
  );
};

export default page;
