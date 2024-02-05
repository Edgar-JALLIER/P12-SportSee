import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { UserData } from "../interfaces/userData";
import "../style/RadialBarChart.scss";

interface ScoreData {
  score?: UserData["score"];
  todayScore?: UserData["todayScore"];
}

const RadialChart = (data: ScoreData) => {
  console.log("data", data);
  const checkData = data.score
    ? { score: data.score * 100 }
    : { todayScore: data.todayScore! * 100 };
  const keydata = !data.score ? "todayScore" : "score";
  const scoreValue = checkData.score ?? checkData.todayScore;

  return (
    <div className="container__radialChart">
      <p className="container__percentage">
        <b>{scoreValue} %</b> <br />
        de votre objectif
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="65%"
          outerRadius="80%"
          barSize={10}
          startAngle={90}
          endAngle={90 + (scoreValue * 360) / 100}
          data={[checkData]}
        >
          <RadialBar
            fill="red"
            stroke-linejoin="round"
            dataKey={keydata}
            cornerRadius={100}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RadialChart;
