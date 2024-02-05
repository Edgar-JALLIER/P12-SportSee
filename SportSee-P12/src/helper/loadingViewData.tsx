import {
  UserDataActivity,
  UserData,
  UserAndSessionData,
  Session,
  ExerciseData,
} from "../interfaces/userData";

export const badResultUI = (
  userData:
    | UserDataActivity
    | UserData
    | undefined
    | UserAndSessionData
    | Session
    | ExerciseData,
  loading: boolean,
  error: string
) => {
  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite : {error}</div>;
  }
  if (!userData) {
    return <div>Données utilisateur non disponibles</div>;
  }
  return false;
};
