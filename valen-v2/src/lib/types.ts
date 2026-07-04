// VALEN — Core Type Definitions

export type Category =
  | "tech"
  | "kitchen"
  | "fitness"
  | "beauty"
  | "home"
  | "gaming"
  | "pets"
  | "more";

export type Platform =
  | "tiktok"
  | "instagram"
  | "youtube"
  | "pinterest"
  | "facebook";

export interface ValenScores {
  performance: number; // 0–10
  value: number;       // 0–10
  quality: number;     // 0–10
  easeOfUse: number;   // 0–10
  overall: number;     // 0–10 (the headline Valen Score)
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: string;         // display string e.g. "£129.99"
  images: string[];      // array of image URLs (Unsplash etc., or base64 data URLs for uploads)
  shortReview: string;   // 1–2 sentence card blurb
  fullReview: string;    // multi-paragraph product page review
  valenVerdict: string;  // punchy 1-liner
  pros: string[];
  cons: string[];
  whyIRecommend: string;
  scores: ValenScores;
  platforms: Platform[];
  platformLinks: Partial<Record<Platform, string>>;
  amazonLink: string;
  trending: boolean;
  onSale: boolean;
  salePrice?: string;
  featured: boolean;
  latest: boolean;
  tags: string[];
  publishedAt: string;   // ISO date string
}
