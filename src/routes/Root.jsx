import { Link, Outlet } from "react-router-dom";
import "./RootStyle.css";

function Root() {
  return (
    <>
      <nav>
        <img className="imgLogo" src={"/react-logo.png"} style={{ width: "50px", height: "50px" }} alt="logo" />
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/Taskboard">Dashboard</Link>
          </li>
          {/* <li>
            <Link to="/contact">Your tasks</Link>
          </li> */}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
