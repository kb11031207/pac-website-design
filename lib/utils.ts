import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get the correct path for static assets with basePath
// Use this for images in the public folder when using basePath
export function getAssetPath(path: string): string {
  const basePath = '/pac-website-design'
  // If it's already an external URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  // If path already starts with basePath, return as-is
  if (path.startsWith(basePath)) {
    return path
  }
  // Prepend basePath to local paths
  return `${basePath}${path.startsWith('/') ? path : '/' + path}`
}
