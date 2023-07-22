"use client";

import { CalendarCheck, Menu } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";

const MainNavigationMenu = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-md">
          <Menu className="mr-2 h-4 w-4" />
          <span>Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Application</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Add task</DropdownMenuItem>
        <DropdownMenuItem>Remove task</DropdownMenuItem>
        <DropdownMenuItem>Clear all tasks</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={toggleDarkMode}
        >{`Toggle ${theme} mode`}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MainNavigationBranding = () => {
  return (
    <div>
      <h1 className="font-extrabold text-[2.5rem] flex items-center">
        <CalendarCheck className="mr-2 w-9 h-9" />
        <span>Todot</span>
      </h1>
    </div>
  );
};

const MainNavigation = () => {
  return (
    <div className="flex justify-between items-center py-5 ">
      <MainNavigationBranding />
      <MainNavigationMenu />
    </div>
  );
};

export default MainNavigation;
