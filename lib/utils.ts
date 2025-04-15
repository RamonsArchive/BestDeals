import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parseServerActionResponse = <T>(response: T): T => {
  return JSON.parse(JSON.stringify(response)) as T;
}
