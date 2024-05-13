import classes from "../style/nav.module.css";
import Account from "./Account";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/home" className={classes.brand}>
            <span className={classes.logo}></span>
            <h3>Learn react</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
