import { HamburgerMenu, Close } from "../Icons";
import styles from "./BurgerMenu.module.css";

type BurgerMenuProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
  color?: string | undefined;
};

const BurgerMenu = ({ open, setOpen, children, color }: BurgerMenuProps) => {
  return (
    <div className={styles.burgerWrapper}>
      <button
        className={`${styles.burgerButton} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? (
          <Close size={28} color={color} />
        ) : (
          <HamburgerMenu size={28} color={color} />
        )}
      </button>

      <div className={`${styles.menuOverlay} ${open ? styles.show : ""}`}>
        <nav className={styles.menuContent} onClick={() => setOpen(false)}>
          {children}
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
