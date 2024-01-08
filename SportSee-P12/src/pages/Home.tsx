import App from "../components/App";
import { Link } from 'react-router-dom'
import '../style/Home.scss'

const Home = () => {
  return (
    <>
      <div>Bienvenu</div>
      <nav>
        <ul>
            <li><Link to="/user/12">Karl</Link></li>
            <li><Link to="/user/18">Cecilia</Link></li>
        </ul>
      </nav>
      <App></App>
    </>
  );
};

export default Home;
