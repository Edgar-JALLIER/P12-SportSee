import { useState, useEffect } from "react";
import CONFIG from "../config";
import mockData from "./mockData";

const FetchUserData = <T,>(userId: number, endpoint: string = "") => {
  const [userData, setUserData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Déclencher le chargement
        setLoading(true);

        if (CONFIG.devMode) {
          if (endpoint === "") {
            const data = (mockData as any)[userId].general;
            setUserData(data);
          } else {
            const dataEndpoint = (mockData as any)[userId][endpoint];
            setUserData(dataEndpoint);
          }
        } else {
          const response = await fetch(
            `http://localhost:3000/user/${userId}/${endpoint}`
          );
          const { data } = await response.json();
          setUserData(data);
        }
        // Effectuer l'appel API

        // Mettre à jour les données
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        // Arrêter le chargement, que l'appel réussisse ou échoue
        setLoading(false);
      }
    };

    // Appeler la fonction fetchData
    fetchData();
  }, [userId, endpoint]); // Déclencher l'effet lorsque l'ID de l'utilisateur ou l'endpoint change

  return { userData, loading, error };
};

export default FetchUserData;
