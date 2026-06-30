import type {Artwork, Category, Medium} from "@/types";

// Falls back to localhost so `npm run dev` works out of the box against a
// locally running backend.
const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

// Shape returned by the backend (matches the MySQL columns - snake_case).
interface ApiArtwork {
  id: string;
  slug: string;
  title: string;
  year: number;
  category_slug: string;
  medium_slug: string;
  dimensions: string;
  description: string;
  image_url: string;
  featured: boolean;
}

function mapArtwork(a: ApiArtwork): Artwork {
  return {
    id: a.id,
    slug: a.slug,
    title: a.title,
    year: a.year,
    categorySlug: a.category_slug,
    mediumSlug: a.medium_slug,
    dimensions: a.dimensions,
    description: a.description,
    imageUrl: a.image_url,
    featured: a.featured
  };
}

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`);

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error ?? `Request failed with status ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export const api = {
  getArtworks: async (): Promise<Artwork[]> => {
    const data = await apiFetch<ApiArtwork[]>("/api/artworks");
    return data.map(mapArtwork);
  },

  getArtworkBySlug: async (slug: string): Promise<Artwork> => {
    const data = await apiFetch<ApiArtwork>(`/api/artworks/${slug}`);
    return mapArtwork(data);
  },

  getCategories: (): Promise<Category[]> =>
    apiFetch<Category[]>("/api/categories"),

  getMediums: (): Promise<Medium[]> => apiFetch<Medium[]>("/api/mediums")
};
