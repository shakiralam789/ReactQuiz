import classes from "../style/account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Account() {
  let { currentUser, logOut } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <Link
            onClick={logOut}
            to="/login"
            className="material-icons-outlined"
            title="Logout"
          >
            logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/sign-up">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
