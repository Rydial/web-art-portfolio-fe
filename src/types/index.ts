export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Medium {
  slug: string;
  name: string;
  description: string;
}

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  year: number;
  categorySlug: string;
  mediumSlug: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
}
