import { Link } from "react-router-dom";
import SportSee from "../assets/sportsee-logo.png";
import "../style/Home.scss";

const Home = () => {
  return (
    <main className="entry-page">
      <div className="welcome">
        <img src={SportSee} alt="logo" />
        <p>Visiter le profil de :</p>
        <nav>
          <ul>
            <li>
              <Link to="/user/12">Karl</Link>
            </li>
            <li>
              <Link to="/user/18">Cecilia</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Home;
