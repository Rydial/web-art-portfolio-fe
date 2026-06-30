import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import clsx from "clsx";

import styles from "./Header.module.scss";
import {useGalleryStore} from "@/store/useGalleryStore";

interface DropdownItem {
  to: string;
  label: string;
}

interface NavMenuProps {
  label: string;
  dropdown: DropdownItem[];
}

function NavMenu({label, dropdown}: NavMenuProps) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <li
      className={styles.navItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.navMenu}>
        <span>{label}</span>
        <span className={styles.navMenuCaret}>▼</span>
      </div>
      <div className={clsx(styles.dropdown, open && styles.dropdownOpen)}>
        <ul>
          {dropdown.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={styles.dropdownLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Header() {
  const categories = useGalleryStore((s) => s.categories);
  const mediums = useGalleryStore((s) => s.mediums);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.title}>
          <span className={styles.titleMain}>Kathy Cheon</span>
          <span className={styles.titleSub}>"Painting is my passion"</span>
        </NavLink>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={({isActive}) =>
                  clsx(styles.navLink, {
                    [styles.active]: isActive
                  })
                }
              >
                Home
              </NavLink>
            </li>
            {categories.length > 0 && (
              <NavMenu
                label="Categories"
                dropdown={categories.map((c) => ({
                  to: `/categories/${c.slug}`,
                  label: c.name
                }))}
              />
            )}
            {mediums.length > 0 && (
              <NavMenu
                label="Mediums"
                dropdown={mediums.map((m) => ({
                  to: `/mediums/${m.slug}`,
                  label: m.name
                }))}
              />
            )}
            <li className={styles.navItem}>
              <NavLink
                to="/about"
                className={({isActive}) =>
                  clsx(styles.navLink, {
                    [styles.active]: isActive
                  })
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
