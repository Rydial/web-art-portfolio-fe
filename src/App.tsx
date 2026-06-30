import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import styles from "./App.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import ArtworkDetail from "@/pages/ArtworkDetail/ArtworkDetail";
import CategoryDetail from "@/pages/CategoryDetail/CategoryDetail";
import MediumDetail from "@/pages/MediumDetail/MediumDetail";
import {useGalleryStore} from "@/store/useGalleryStore";

export default function App() {
  const status = useGalleryStore((s) => s.status);
  const error = useGalleryStore((s) => s.error);
  const fetchAll = useGalleryStore((s) => s.fetchAll);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  // if (status === "idle" || status === "loading") {
  //   return (
  //     <div className={styles.statusScreen}>
  //       <p>Loading gallery…</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Header />
      <main>
        {(status === "error" && (
          <div className={styles.errorScreen}>
            <p
              className={styles.errorText}
            >{`Error loading gallery: ${error}`}</p>
            {/* <button className={styles.retryButton} onClick={() => fetchAll()}>
          Retry
        </button> */}
          </div>
        )) || (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/categories/:categorySlug"
              element={<CategoryDetail />}
            />
            <Route path="/mediums/:mediumSlug" element={<MediumDetail />} />
            <Route path="/artwork/:artworkSlug" element={<ArtworkDetail />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        )}
      </main>
      <Footer />
    </>
  );
}
