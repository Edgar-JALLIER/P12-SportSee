import { useParams } from "react-router-dom";
import FetchUserData from "../data/FetchUserData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import "../style/DailyActivity.scss";
import { UserDataActivity } from "../interfaces/userData";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { badResultUI } from "../helper/loadingViewData";

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const session = payload[0].payload;
    return (
      <div className="custom-tooltip-daily-activity">
        <p>{session.kilogram}kg</p>
        <p>{session.calories}Kcal</p>
      </div>
    );
  }
  return null;
};

const DailyActivity = () => {
  const { id } = useParams();
  if (!id) {
    return;
  }
  const numberId = parseInt(id);
  const { userData, loading, error } = FetchUserData<UserDataActivity>(
    numberId,
    "activity"
  );
  const errorResult = badResultUI(userData, loading, error);
  if (errorResult) return errorResult;

  const data = userData ? userData.sessions : [];
  return (
    <div className="barChart">
      <div className="legend-title">
        <h2 className="graphique-title">Activité quotidienne</h2>
        <ul className="legend-liste">
          <li className="legend-graphique legend-graphique-poids">
            Poids (Kg)
          </li>
          <li className="legend-graphique legend-graphique-calories">
            Calories brûlées (kCal)
          </li>
        </ul>
      </div>
      <div className="graphique-barChart">
        <ResponsiveContainer>
          <BarChart barGap={10} data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              tickFormatter={(index) => index + 1}
              tickMargin={15}
              tickSize={0}
              tickLine={false}
            />
            <YAxis orientation="right" axisLine={false} tickLine={false} />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{
                outline: "none",
                background: "red",
                color: "white",
              }}
              itemStyle={{
                color: "white",
                padding: 0,
                outline: "none",
              }}
            />
            <Bar
              barSize={7}
              radius={[20, 20, 0, 0]}
              dataKey="kilogram"
              name="Kilo"
              fill="#20253A"
            />
            <Bar
              barSize={7}
              radius={[20, 20, 0, 0]}
              dataKey="calories"
              name="Calories"
              fill="#E60000"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyActivity;
