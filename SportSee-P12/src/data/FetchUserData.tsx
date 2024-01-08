import { useState, useEffect } from "react";
import CONFIG from "../config";
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

const FetchUserData = (userId: number) => {
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Déclencher le chargement
        setLoading(true);

        if (CONFIG.devMode) {
          console.log(CONFIG.devMode)
        } else {
          const response = await fetch(`http://localhost:3000/user/${userId}`);
          const { data } = await response.json();
          setUserData(data);
        }
        // Effectuer l'appel API

        // Mettre à jour les données
        
      } catch (error) {
        // Gérer les erreurs
        setError(error);
      } finally {
        // Arrêter le chargement, que l'appel réussisse ou échoue
        setLoading(false);
      }
    };

    // Appeler la fonction fetchData
    fetchData();
  }, [userId]); // Déclencher l'effet lorsque l'ID de l'utilisateur change

  return { userData, loading, error };
};

export default FetchUserData;
