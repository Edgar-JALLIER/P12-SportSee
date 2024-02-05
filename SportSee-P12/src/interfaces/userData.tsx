export interface UserData {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore?: number;
  score?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

export interface UserDataActivity {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}

export interface UserAndSessionData {
  userId: number;
  sessions: Session[];
}

export interface Session {
  day: number;
  sessionLength: number;
}

export interface ExerciseData {
  userId: number;
  kind: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  };
  data: ExerciseItem[];
}

export interface ExerciseItem {
  value: number;
  kind: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface AppData {
  [key: number]: {
    general: UserData;
    performance: ExerciseData;
    "average-sessions": UserAndSessionData;
    activity: UserDataActivity;
  };
}
