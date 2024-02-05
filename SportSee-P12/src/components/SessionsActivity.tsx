import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  Rectangle,
} from "recharts";
import { useParams } from "react-router-dom";
import { badResultUI } from "../helper/loadingViewData";
import { UserAndSessionData } from "../interfaces/userData";
import FetchUserData from "../data/FetchUserData";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import "../style/SessionActivity.scss";

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload?.length) {
    const session = payload[0].payload;
    return (
      <div className="custom-tooltip-session">
        <p>{session.sessionLength} min</p>
      </div>
    );
  }
  return null;
};
const CustomizedCursor = (props) => {
  const pointX = props.points[0].x;
  const pointY = props.points[0].y;
  const widthRectangle = props.width;
  const heightRectangle = props.height + 100;
  return (
    <Rectangle
      x={pointX}
      y={pointY}
      width={widthRectangle}
      height={heightRectangle}
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

const SessionActivity = () => {
  const { id } = useParams();
  if (!id) {
    return;
  }
  const numberId = parseInt(id);
  const { userData, loading, error } = FetchUserData<UserAndSessionData>(
    numberId,
    "average-sessions"
  );
  const errorResult = badResultUI(userData, loading, error);
  if (errorResult) return errorResult;
  const data = userData?.sessions;
  const dayOfWeek: { [key: number]: string } = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  const maxAxisHeight = 100;
  return (
    <div className="session-chart">
      <p className="session-description">
        Duréé moyenne des <br /> sessions
      </p>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            tickFormatter={(day) => dayOfWeek[day]}
            tick={{
              stroke: "white",
              opacity: "0.8",
              fontSize: "14px",
              fontWeight: "300",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="sessionLength"
            hide={true}
            domain={[0, maxAxisHeight]}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{
              outline: "none",
              background: "white",
              color: "black",
            }}
            itemStyle={{
              color: "white",
              padding: 0,
              outline: "none",
            }}
            cursor={<CustomizedCursor />}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFF"
            strokeWidth={2}
            activeDot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SessionActivity;
