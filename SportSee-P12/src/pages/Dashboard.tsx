import FetchUserData from "../data/FetchUserData";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../style/Dashboard.scss";

interface UserData {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

const Dashboard = () => {
  const { id } = useParams();
  if (!id) {
    return;
  }
  const numberId = parseInt(id);
  const { userData, loading, error } = FetchUserData(numberId);
  console.log("test", id);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite : {error.message}</div>;
  }
  if (!userData) {
    return <div>Données utilisateur non disponibles</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <SideBar />
        <main>
          <div className="greetings-div">
            <h3 className="greetings-title">
              Bonjour{" "}
              <span className="red-text">{userData.userInfos.firstName}</span>
            </h3>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
