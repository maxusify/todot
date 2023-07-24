"use client";

import {
  Brush,
  CalendarCheck,
  Eraser,
  Menu,
  MinusSquare,
  PlusSquare,
  Settings,
} from "lucide-react";
import Link from "next/link";
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

  const iconsStyle = "mr-2 h-4 w-4";
  const itemsStyle = "cursor-pointer flex items-center";

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
        <DropdownMenuLabel>Tasks</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={itemsStyle}>
          <PlusSquare className={iconsStyle} />
          Add task
        </DropdownMenuItem>
        <DropdownMenuItem className={itemsStyle}>
          <MinusSquare className={iconsStyle} />
          Remove task
        </DropdownMenuItem>
        <DropdownMenuItem className={itemsStyle}>
          <Eraser className={iconsStyle} />
          Clear all tasks
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Application</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={itemsStyle}>
          <Settings className={iconsStyle} />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={toggleDarkMode} className={itemsStyle}>
          <Brush className={iconsStyle} /> {`Toggle ${theme} mode`}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MainNavigationBranding = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="font-extrabold text-[2.5rem] flex items-center">
          <CalendarCheck className="mr-2 w-9 h-9" />
          <span>Todot</span>
        </h1>
      </Link>
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
