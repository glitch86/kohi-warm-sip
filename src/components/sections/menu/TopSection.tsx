import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import React from "react";

const TopSection = () => {
  const filters: string[] = ["coffee", "cold drinks", "snacks", "merchandise"];
  return (
    <div className="flex items-center justify-between w-full">
      {/* left  */}
      <div className="flex-1">
        <h2 className="text-5xl text-secondary">Artisan Menu</h2>
        <p>
          Every sip is a ritual. Explore our curated
          <br></br>
          selection of hand-roasted coffee and seasonal treats.
        </p>

        <div className="my-4 flex gap-6 items-center ">
          {filters.map((filter, index) => (
            <span key={index} className="py-2 px-4 bg-primary text-white rounded-full">{filter}</span>
          ))}
        </div>
      </div>

      {/* right  */}
      <div className=" flex-1">
        {/* search field  */}

        <InputGroup className="max-w-xs h-13 rounded-3xl bg-accent/70 px-4 mx-auto">
          <InputGroupInput placeholder="Search..."></InputGroupInput>
          <InputGroupAddon>
            <Search></Search>
          </InputGroupAddon>
          <InputGroupAddon align={"inline-end"}>5 Results</InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default TopSection;
