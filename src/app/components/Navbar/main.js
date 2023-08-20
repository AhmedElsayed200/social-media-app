import Link from "next/link";
import styles from "../../../../public/styles/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/posts">
        <p className={styles.navlink}>All Posts</p>
      </Link>
      <Link href="/favorite-posts">
        <p className={styles.navlink}>Favorite Posts</p>
      </Link>
    </nav>
  );
};

export default Navbar;
