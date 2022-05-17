import { NavLink } from "react-router-dom";
import { useSelected } from "../../hooks/useSelected";
import "./Navbar.css";

const NavBar = () => {
  const { selected, selPos, selectedRef, unselectedRef, setSelected } =
    useSelected();

  const handleSelected = async (btnEnlace: string) => {
    setSelected(btnEnlace);
  };

  return (
    <>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <div className="navbar-brand navbar-logo">Navbar</div>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector" style={selPos}>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li
              className={`nav-item ${selected === "dashboard" ? "active" : ""}`}
            >
              <NavLink
                to={""}
                className="nav-link"
                ref={selected === "dashboard" ? selectedRef : unselectedRef}
                onClick={(e) => {
                  handleSelected("dashboard");
                }}
              >
                <i className="fas fa-tachometer-alt"></i>Dashboard
              </NavLink>
            </li>
            <li className={`nav-item ${selected === "book" ? "active" : ""}`}>
              <NavLink
                to={""}
                className="nav-link"
                ref={selected === "book" ? selectedRef : unselectedRef}
                onClick={(e) => {
                  handleSelected("book");
                }}
              >
                <i className="far fa-address-book"></i>Address Book
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                selected === "components" ? "active" : ""
              }`}
            >
              <NavLink
                to={""}
                className="nav-link"
                ref={selected === "components" ? selectedRef : unselectedRef}
                onClick={(e) => {
                  handleSelected("components");
                }}
              >
                <i className="far fa-clone"></i>Components
              </NavLink>
            </li>
            <li
              className={`nav-item ${selected === "calendar" ? "active" : ""}`}
            >
              <NavLink
                to={""}
                className="nav-link"
                ref={selected === "calendar" ? selectedRef : unselectedRef}
                onClick={(e) => {
                  handleSelected("calendar");
                }}
              >
                <i className="far fa-calendar-alt"></i>Calendar
              </NavLink>
            </li>
            <li className={`nav-item ${selected === "charts" ? "active" : ""}`}>
              <NavLink
                to={""}
                className="nav-link"
                ref={selected === "charts" ? selectedRef : unselectedRef}
                onClick={(e) => {
                  handleSelected("charts");
                }}
              >
                <i className="far fa-chart-bar"></i>Charts
              </NavLink>
            </li>
            <li
              className={`nav-item ${selected === "documents" ? "active" : ""}`}
            >
              <NavLink
                to={""}
                className="nav-link"
                ref={selected === "documents" ? selectedRef : unselectedRef}
                onClick={(e) => {
                  handleSelected("documents");
                }}
              >
                <i className="far fa-copy"></i>Documents
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
