import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, options);
        setData(response.data);
      } catch (err) {
        console.error("Error al obtener los datos:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) fetchData();
    
  }, []);

  return { data, loading, error };
};

export default useFetch;
