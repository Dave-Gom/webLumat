import logoReact from "./../../logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="App-footer">
      <div>
        <span>
          <a
            href="#"
            className="fa fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </span>
        <span>
          <a
            href="#"
            className="fa fa-google"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </span>
      </div>
      <div>
        <h3>Desarrollado con React.js</h3>
        <img src={logoReact} className="react-logo" alt="logo" />
      </div>
      <div>Copyright Morado S.A</div>
    </footer>
  );
};

export default Footer;
