import {Link, useParams} from "react-router-dom";

import styles from "./MediumDetail.module.scss";
import {useGalleryStore} from "@/store/useGalleryStore";

export default function MediumDetail() {
  const {mediumSlug} = useParams<{mediumSlug: string}>();

  const getMediumBySlug = useGalleryStore((s) => s.getMediumBySlug);
  const getArtworksByMedium = useGalleryStore((s) => s.getArtworksByMedium);

  const medium = getMediumBySlug(mediumSlug ?? "");
  const artworks = getArtworksByMedium(mediumSlug ?? "");

  if (!medium) {
    return <p>Medium not found</p>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{medium.name}</h1>
      {artworks.length === 0 ? (
        <p className={styles.empty}>No works in this medium yet.</p>
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
