import { Outlet } from "react-router-dom";
import classes from "../style/layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{<Outlet />}</div>
      </main>
    </>
  );
}
