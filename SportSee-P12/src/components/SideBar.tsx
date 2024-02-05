import swim from "../assets/swim.png";
import gym from "../assets/gym.png";
import cycling from "../assets/cycling.png";
import yoga from "../assets/yoga.png";
import "../style/SideBar.scss";

const SideBar = () => {
  return (
    <aside className="side-bar">
      <nav className="icon-nav">
        <ul className="icon-ul">
          <li>
            <div className="icon-bg">
              <img src={yoga} alt="yoga" />
            </div>
          </li>
          <li>
            <div className="icon-bg">
              <img src={swim} alt="swim" />
            </div>
          </li>
          <li>
            <div className="icon-bg">
              <img src={cycling} alt="cycling" />
            </div>
          </li>
          <li>
            <div className="icon-bg">
              <img src={gym} alt="gym" />
            </div>
          </li>
        </ul>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  );
};

export default SideBar;
