import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className="{styles.title}">myMoney</li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">가입</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
