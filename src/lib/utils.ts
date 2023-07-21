import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { ELLIPSIS_LIMIT } from "@/config/app";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalizeFirstLetter = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const ellipsis = (text: string, limit: number = ELLIPSIS_LIMIT) => {
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1)}...`;
};