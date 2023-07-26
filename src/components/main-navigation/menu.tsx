"use client";

import React from "react";
import {
  Brush,
  Eraser,
  FileDown,
  FileUp,
  Menu,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { clearAllTasks } from "@/lib/actions";

import { Button } from "../ui/button";

const NavigationMenu = () => {
  const { theme, setTheme } = useTheme();

  const iconsStyle = "mr-2 h-4 w-4";
  const itemsStyle = "cursor-pointer flex items-center";

  let toggleDarkModeIcon = <Brush className={iconsStyle} />;
  if (theme === "dark") toggleDarkModeIcon = <Moon className={iconsStyle} />;
  if (theme === "light") toggleDarkModeIcon = <Sun className={iconsStyle} />;

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    if (theme === "system") {
      setTheme("dark");
      return;
    }

    setTheme("system");
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
        <DropdownMenuItem
          className={itemsStyle}
          onClick={() => clearAllTasks()}
        >
          <Eraser className={iconsStyle} />
          Clear all tasks
        </DropdownMenuItem>
        <DropdownMenuItem className={itemsStyle}>
          <FileUp className={iconsStyle} />
          Import tasks from file
        </DropdownMenuItem>
        <DropdownMenuItem className={itemsStyle}>
          <FileDown className={iconsStyle} />
          Export tasks to file
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Application</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={itemsStyle}>
          <Settings className={iconsStyle} />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={toggleDarkMode} className={itemsStyle}>
          {toggleDarkModeIcon} {`Toggle ${theme} mode`}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationMenu;
