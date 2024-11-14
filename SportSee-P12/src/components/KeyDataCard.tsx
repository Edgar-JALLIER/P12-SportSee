import "../style/KeyDataCard.scss";
import { UserData } from "../interfaces/userData";

interface KeyDataCardProps {
  keyData: UserData["keyData"];
}

const keyLabels = {
  calorieCount: "Calories",
  proteinCount: "Proteins",
  carbohydrateCount: "Glucides",
  lipidCount: "Lipides",
};

const KeyDataCard = ({ keyData }: KeyDataCardProps) => {
  return (
    <>
      {Object.keys(keyData).map((key) => (
        <div key={key} className="data-card">
          <img
            src={`/P12-SportSee/assets/${key}.png`}
            alt=""
            className="data-card__logo"
          />
          <div className="data-card__description">
            <span>
              {keyData[key as keyof UserData["keyData"]].toLocaleString()}
              {key === "calorieCount" ? `${"kCal"}` : `${"g"}`}
            </span>
            <p>{keyLabels[key as keyof UserData["keyData"]]}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default KeyDataCard;
