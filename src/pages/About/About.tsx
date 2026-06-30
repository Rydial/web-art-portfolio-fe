import styles from "./About.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.text}>
        Mine has been a privileged life in as much as painting has always been
        my passion, allowing me to create, travel and mix with like-minded
        friends and to make it a successful career.
      </p>
      <p className={styles.text}>
        A scholarship at the age of 15 admitted me into the National Art School,
        working at a Sydney Commercial Art Studio during the semester breaks. I
        combined the two, enjoying them so much that when I married and family
        arrived I continued my course at the local Gymea College and did
        free-lance commercial art from home. Around this time I began entering
        competitions and spurred on by success began to use pastel, as well as
        the other mediums that I’d been tutored in.
      </p>
      <p className={styles.text}>
        The immediacy and brilliance of pastel lifted me in a way no other
        medium had and experimenting with no real guidance seemed to open
        endless possibilities. Initially I would use it in a linear fashion but
        now feel that I paint with it… a little of both is preferable… and after
        all the subject dictates the way to go!
      </p>
      <p className={styles.text}>
        Recognition as a pastellist has taken me interstate and overseas to
        study and teach, an opportunity I’ve been grateful for. My ‘self-taught’
        medium has won over 180 first prizes, (29 of these being “Best in Show”)
        beginning at a time when there were few ‘pastel’ sections included in
        competitions, it is good to see that it is often (not always still!) up
        there now with oil and water-colour. Other first prizes are 20 for
        water-colour, 21 for oil or acrylic, 4 for mixed media and 10 for
        drawing.
      </p>
    </div>
  );
}
