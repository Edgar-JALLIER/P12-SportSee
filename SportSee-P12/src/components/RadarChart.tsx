import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { useParams } from "react-router-dom";
import { badResultUI } from "../helper/loadingViewData";
import { ExerciseData } from "../interfaces/userData";
import FetchUserData from "../data/FetchUserData";
import "../style/RadarChartSession.scss";

const RadarChartSession = () => {
  const { id } = useParams();
  if (!id) {
    return;
  }
  const numberId = parseInt(id);
  const { userData, loading, error } = FetchUserData<ExerciseData>(
    numberId,
    "performance"
  );
  const errorResult = badResultUI(userData, loading, error);
  if (errorResult) return errorResult;
  function transformData(originalData: ExerciseData | undefined) {
    const transformedData = originalData?.data.map((item) => ({
      subject:
        originalData.kind[item.kind][0].toUpperCase() +
        originalData.kind[item.kind].slice(1),
      key: item.value,
      fullMark: 250,
    }));

    return transformedData;
  }
  const newData = transformData(userData);
  return (
    <div className="radar-chart">
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="78%" data={newData}>
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            stroke="white"
            strokeWidth={2}
            polarRadius={[0, 10, 25, 49, 72, 95]}
          />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: "12px" }}
          />
          <Radar dataKey="key" fill="rgba(255, 1, 1, 0.70)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RadarChartSession;
