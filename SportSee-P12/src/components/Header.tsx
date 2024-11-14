import { Link } from "react-router-dom";
import SportSee from "../assets/sportsee-logo.png";
import "../style/Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={SportSee} alt="logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/#">Profil</Link>
          </li>
          <li>
            <Link to="/#">Réglage</Link>
          </li>
          <li>
            <Link to="/#">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
