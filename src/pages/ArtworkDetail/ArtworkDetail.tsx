import {useParams} from "react-router-dom";

import styles from "./ArtworkDetail.module.scss";
import {useGalleryStore} from "@/store/useGalleryStore";

export default function ArtworkDetail() {
  const {artworkSlug} = useParams<{artworkSlug: string}>();

  const getArtworkBySlug = useGalleryStore((s) => s.getArtworkBySlug);
  const getCategoryBySlug = useGalleryStore((s) => s.getCategoryBySlug);
  const getMediumBySlug = useGalleryStore((s) => s.getMediumBySlug);

  const artwork = getArtworkBySlug(artworkSlug ?? "");
  if (!artwork) {
    return <div></div>;
  }

  const category = getCategoryBySlug(artwork.categorySlug);
  const medium = getMediumBySlug(artwork.mediumSlug);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{artwork.title}</h1>
      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <img src={artwork.imageUrl} alt={artwork.title} />
        </div>
        <ul className={styles.textRow}>
          <li className={styles.textWrap}>
            <p className={styles.textPrimary}>Category</p>
            <p className={styles.textSecondary}>{category?.name}</p>
          </li>
          <li className={styles.textWrap}>
            <p className={styles.textPrimary}>Medium</p>
            <p className={styles.textSecondary}>{medium?.name}</p>
          </li>
          <li className={styles.textWrap}>
            <p className={styles.textPrimary}>Dimensions</p>
            <p className={styles.textSecondary}>{artwork.dimensions}</p>
          </li>
        </ul>
        <p className={styles.description}>{artwork.description}</p>
      </div>
    </div>
  );
}
