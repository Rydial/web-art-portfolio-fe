import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";

import type {Artwork} from "@/types";
import styles from "./Slideshow.module.scss";

interface SlideshowProps {
  artworks: Artwork[];
  intervalMs?: number;
}

export default function Slideshow({
  artworks,
  intervalMs = 6000
}: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (artworks.length <= 1) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % artworks.length);
    }, intervalMs);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [artworks.length, intervalMs]);

  if (artworks.length === 0) return null;

  return (
    <section className={styles.slideshow}>
      <div className={styles.frame}>
        {artworks.map((art, i) => (
          <Link
            to={`/artwork/${art.slug}`}
            key={art.id}
            className={clsx(styles.slide, i === index && styles.slideActive)}
          >
            <div className={styles.imageWrap}>
              <img
                src={art.imageUrl}
                alt={art.title}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className={styles.artworkMeta}>
              <span className={styles.artworkTitle}>{art.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
