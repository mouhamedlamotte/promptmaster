import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Truncate = ({str, max, len}: {str: string, max: number, len: number}) => {
  return str?.length > max ? str?.substring(0, len) + "..." : str;
}