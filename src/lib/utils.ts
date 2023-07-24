import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ELLIPSIS_LIMIT } from "@/config/app";

/// Shadcn/ui helper function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/// Capitalizes first letter of a string
export const capitalizeFirstLetter = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

/// Appends ellipsis effect for long text.
export const ellipsis = (text: string, limit: number = ELLIPSIS_LIMIT) => {
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1)}...`;
};
