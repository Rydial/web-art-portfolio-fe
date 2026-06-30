import styles from "./About.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.text}>
        I'm a painter currently studying at the National Art School in Sydney,
        where I spend my days surrounded by other artists who are just as
        obsessed with paint, light, and the outdoors as I am. My practice is
        built on oil painting — a medium I keep coming back to because of how
        alive it feels under the brush, how it lets colour bloom and blend in
        ways that always surprise me, even after years of working with it.
      </p>
      <p className={styles.text}>
        Nature is at the heart of everything I make. I'm drawn to landscapes
        because they hold so much movement, even when they're still — a shift in
        cloud cover, the way light changes across a hillside in the space of an
        hour, the quiet drama of trees bending in wind. Painting these moments
        is my way of slowing down and really looking at the world, rather than
        just passing through it.
      </p>
      <p className={styles.text}>
        Studying at the National Art School has shaped my work in ways I'm still
        discovering. Being immersed in a community that values craft,
        observation, and honest mark-making has pushed me to trust my instincts
        while also holding myself to a higher standard. Every critique, every
        long studio session, every failed painting I've scraped back and started
        again has taught me something about patience — and about how much of
        painting is really about learning to see.
      </p>
      <p className={styles.text}>
        For me, oil paint is the only medium that can hold the kind of
        atmosphere I'm chasing. The way it stays workable, the way colours can
        be layered and reworked over days, gives me room to build landscapes
        that feel less like snapshots and more like memories — soft at the
        edges, warm in the light, true to a feeling rather than a photograph.
        That's the balance I'm always trying to strike: technical care paired
        with something that still feels loose and alive.
      </p>
      <p className={styles.text}>
        This portfolio is a collection of that ongoing exploration — paintings
        that come from time spent outdoors, from sketches made on location, and
        from the quiet hours in the studio turning those moments into something
        lasting. I'm early in my journey as an artist, but I'm deeply committed
        to it, and I'm grateful for every person who takes the time to look at
        what I've made. Thank you for being here.
      </p>
    </div>
  );
}
