export interface Product {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  imageSrc: string;
  hoverImageSrc?: string;
  badge?: 'sale' | 'new' | 'bestseller';
  available: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description?: string;
  imageSrc: string;
  products: Product[];
}

export interface NavigationItem {
  title: string;
  url: string;
  megaMenu?: boolean;
  featured?: {
    title: string;
    imageSrc: string;
    url: string;
  };
  children?: {
    title: string;
    url: string;
  }[];
}

export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}