import { ExerciseData } from "../interfaces/userData";

export function transformData(originalData: ExerciseData | undefined) {
  const kindFR: { [key: number]: string } = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  const transformedData = originalData?.data.map((item) => ({
    subject: kindFR[item.kind],
    key: item.value,
    fullMark: 250,
  }));

  return transformedData;
}

export const dayOfWeek: { [key: number]: string } = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};
