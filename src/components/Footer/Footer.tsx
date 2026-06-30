import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.note}>
        © Copyright Kathy Cheon. All artworks displayed on this website are
        owned by the artist, Kathy Cheon, and may not be reproduced for
        commercial purposes without her written permission.
      </span>
    </footer>
  );
}
