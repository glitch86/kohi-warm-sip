import React from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-24 grainy h-screen">
      <div className="relative container mx-auto flex">
        <div>
          <h1 className="text-6xl my-2">
            Enhance Your{" "}
            <span className="text-secondary font-semibold">Coffee</span>
            <br />
            Experience with
          </h1>
          <p>
            carefully crafted products
            <br />
            that elevate every sip.
          </p>
          <Button className="bg-secondary my-2 px-6 py-6 rounded-2xl">
            Order Now <Coffee></Coffee>
          </Button>
        </div>
        <div className="absolute top-1/4 left-2/4 bg-secondary rounded-full">
          <div className="relative w-96 h-80 ">
            <Image
              src={"/images/kohi.png"}
              alt="hero"
              fill
              sizes="auto"
              className=""
            ></Image>
          </div>
          <div className="absolute top-0 left-100  text-center">
            <div>
              <Image
                src={"/images/coffeeSplash.png"}
                alt="coffee"
                width={128}
                height={128}
                className="mx-auto"
              ></Image>
            </div>

            <div className="flex gap-2 mt-7">
              <div className="">
                <h1 className="font-semibold text-xl">+1000</h1>
                <p>Out Products</p>
              </div>

              <div className="h-12 border-2"></div>
              <div>
                <h1 className="font-semibold text-xl">+7400</h1>
                <p>Total Sales</p>
              </div>
              <div className="h-12 border-2"></div>
              <div>
                <h1 className="font-semibold text-xl">+2000</h1>
                <p>Total Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
