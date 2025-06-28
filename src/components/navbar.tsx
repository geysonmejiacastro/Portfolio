import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const section = location.pathname.split("/")[1]; // grabs 'it', 'web', etc.

  return (
    <>
      <nav>
        {/* Left side: Home link */}
        <div className="nav-left">
          <NavLink className="Home" to={`/${section}/Home`}>
            Home
          </NavLink>
        </div>

        {/* Center: Project / About / Resume */}
        <div className="nav-center">
          <ul>
            <li>
              <NavLink
                to={`/${section}/Project`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${section}/About`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${section}/Resume`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right side (empty filler to center middle) */}
        <div className="nav-right" />
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
