import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import React from "react";

export const Navbar = () => {
  return (
    <div className=" py-2">
      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          </NavigationMenuItem>

          <Avatar className={""}>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>


        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
