import { clsx, type ClassValue } from 'clsx'

/** Merge conditional class names. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/** Format a number as currency, e.g. formatPrice(129) -> "$129" */
export function formatPrice(amount: number, currency: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
