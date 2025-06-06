import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIndiaTime = (date: Date): Date =>
  new Date(date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

export const formatIndiaTime = (
  date: Date,
  options: Intl.DateTimeFormatOptions
): string =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    ...options,
  }).format(date);
