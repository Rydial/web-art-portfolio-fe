import {create} from "zustand";
import {api} from "@/lib/api";
import type {Artwork, Category, Medium} from "@/types";

type Status = "idle" | "loading" | "success" | "error";

interface GalleryState {
  artworks: Artwork[];
  categories: Category[];
  mediums: Medium[];
  status: Status;
  error: string | null;

  fetchAll: () => Promise<void>;

  getArtworkBySlug: (slug: string) => Artwork | undefined;
  getCategoryBySlug: (slug: string) => Category | undefined;
  getMediumBySlug: (slug: string) => Medium | undefined;
  getArtworksByCategory: (categorySlug: string) => Artwork[];
  getArtworksByMedium: (mediumSlug: string) => Artwork[];
  getFeaturedArtworks: () => Artwork[];
}

export const useGalleryStore = create<GalleryState>((set, get) => ({
  artworks: [],
  categories: [],
  mediums: [],
  status: "idle",
  error: null,

  fetchAll: async () => {
    // Avoid duplicate fetches
    if (get().status === "loading" || get().status === "success") return;

    set({status: "loading", error: null});

    try {
      const [artworks, categories, mediums] = await Promise.all([
        api.getArtworks(),
        api.getCategories(),
        api.getMediums()
      ]);

      set({artworks, categories, mediums, status: "success"});
    } catch (err) {
      set({
        status: "error",
        error:
          err instanceof Error ? err.message : "Failed to load gallery data."
      });
    }
  },

  getArtworkBySlug: (slug) => get().artworks.find((a) => a.slug === slug),

  getCategoryBySlug: (slug) => get().categories.find((c) => c.slug === slug),

  getMediumBySlug: (slug) => get().mediums.find((m) => m.slug === slug),

  getArtworksByCategory: (categorySlug) =>
    get().artworks.filter((a) => a.categorySlug === categorySlug),

  getArtworksByMedium: (mediumSlug) =>
    get().artworks.filter((a) => a.mediumSlug === mediumSlug),

  getFeaturedArtworks: () => get().artworks.filter((a) => a.featured)
}));
