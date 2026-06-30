import styles from "./Home.module.scss";
import Slideshow from "@/components/Slideshow/Slideshow";
import {useGalleryStore} from "@/store/useGalleryStore";

export default function Home() {
  const getFeaturedArtworks = useGalleryStore((s) => s.getFeaturedArtworks);
  const featured = getFeaturedArtworks();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Home</h1>
      <div className={styles.slideshowContainer}>
        <Slideshow artworks={featured} />
      </div>
    </div>
  );
}
