"use client";

import { Menu } from "lucide-react";
import { useTheme } from "next-themes";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { Button } from "./ui/button";

const MainNavigationMenu: React.FC = () => {
  const { setTheme } = useTheme();
  let colorMode: "light" | "dark" | "system" = "dark";

  // FIXME: Color mode
  const toggleDarkMode = () => {
    setTheme(colorMode);
    colorMode = colorMode === "dark" ? "light" : "dark"; 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
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
        <DropdownMenuItem onClick={toggleDarkMode}>{`Toggle ${colorMode} mode`}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const MainNavigation: React.FC = () => {
  return (
    <div className="flex justify-between py-5 ">
      <div>
        <h1 className="font-extrabold text-2xl">Todot</h1>
      </div>
      <MainNavigationMenu />
    </div>
  );
};

export default MainNavigation;
