import {Link, useParams} from "react-router-dom";

import styles from "./CategoryDetail.module.scss";
import {useGalleryStore} from "@/store/useGalleryStore";

export default function CategoryDetail() {
  const {categorySlug} = useParams<{categorySlug: string}>();

  const getCategoryBySlug = useGalleryStore((s) => s.getCategoryBySlug);
  const getArtworksByCategory = useGalleryStore((s) => s.getArtworksByCategory);

  const category = getCategoryBySlug(categorySlug ?? "");
  const artworks = getArtworksByCategory(categorySlug ?? "");

  if (!category) {
    return <p>Category not found</p>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{category.name}</h1>
      {artworks.length === 0 ? (
        <p className={styles.empty}>No works in this category yet.</p>
      ) : (
        <ul className={styles.grid}>
          {artworks.map((artwork) => (
            <li key={artwork.id}>
              <Link to={`/artwork/${artwork.slug}`} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardTitle}>{artwork.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
