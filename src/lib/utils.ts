import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTime = (date: Date): Date =>
  new Date(date.toLocaleString("en-US", { timeZone: "Europe/Rome" }));

export const formatTime = (
  date: Date,
  options: Intl.DateTimeFormatOptions
): string =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    ...options,
  }).format(date);
