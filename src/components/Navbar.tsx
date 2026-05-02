"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { House, PanelsTopLeft, Search, ShoppingCart, User } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="z-50 fixed top-0 w-full bg-accent/60 backdrop-blur-2xl">
      <div className="container mx-auto flex justify-between">
        <Logo></Logo>
        <NavigationMenu className="mx-auto rounded-b-2xl">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={"/"}>
                  <House></House> Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={"/menu"}>
                  <PanelsTopLeft></PanelsTopLeft> Menu
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={"/about"}>About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={"/More"}>More</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex justify-center items-center gap-3">
          <div className="bg-secondary p-2 rounded-md text-white">
            <Search></Search>
          </div>
          <div className="bg-secondary p-2 rounded-md text-white">
            <ShoppingCart></ShoppingCart>
          </div>
          <div className="bg-secondary p-2 rounded-md text-white">
            <User></User>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
