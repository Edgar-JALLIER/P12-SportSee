import SportSee from "../assets/sportsee-logo.png";
import "../style/Header.scss";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={SportSee} alt="logo" />
      </a>

      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
