import FetchUserData from "../data/FetchUserData";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import DailyActivity from "../components/DailyActivity";
import SessionActivity from "../components/SessionsActivity";
import { badResultUI } from "../helper/loadingViewData";
import KeyDataCard from "../components/KeyDataCard";
import { UserData } from "../interfaces/userData";
import RadarChartSession from "../components/RadarChart";
import "../style/Dashboard.scss";
import RadialChart from "../components/RadialBarChart";

const Dashboard = () => {
  const { id } = useParams();
  if (!id) {
    return;
  }
  const numberId = parseInt(id);
  const { userData, loading, error } = FetchUserData<UserData>(numberId, "");

  const errorResult = badResultUI(userData, loading, error);
  if (errorResult) return errorResult;

  const scoreUserData = !userData?.todayScore
    ? userData?.score
    : userData?.todayScore;

  return (
    <>
      <Header />
      <div className="container__sidebar">
        <SideBar />
        <main className="main-charts">
          <div className="container__allInfos">
            <div className="greetings-div">
              <h3 className="greetings-title">
                Bonjour{" "}
                <span className="red-text">
                  {userData?.userInfos.firstName}
                </span>
              </h3>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <section className="container__global">
              <section className="container__charts">
                <DailyActivity />
                <div className="container__smallCharts">
                  <SessionActivity />
                  <RadarChartSession />
                  <RadialChart score={scoreUserData} />
                </div>
              </section>
              <section className="container__data-cards">
                {userData && <KeyDataCard keyData={userData.keyData} />}
              </section>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
