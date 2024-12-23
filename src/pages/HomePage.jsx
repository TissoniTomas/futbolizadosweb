import React, { useEffect, useState } from "react";
import MatchDay from "../components/MatchDay/MatchDay.jsx"

import { Link } from "react-router-dom";


const HomePage = () => {


  return (
    <div>
      <MatchDay/>
       
      </div>
    );
  };
  


export default HomePage
        // const [data, setData] = useState(null);
        // const [error, setError] = useState(null);
        // const [loading, setLoading] = useState(true);
        // const [partidos, setPartidos] = useState(null);
      
        // useEffect(() => {
        //   const fetchData = async () => {
        //     try {
        //       const response = await axios.get(
        //         "/api/v4/competitions",
        //         {
        //           headers: {
        //             "X-Auth-Token": "cdbabcd865b54d2e9243c3763f8540bf", // Reemplaza con tu API key
        //           },
        //         }
        //       );
      
        //       setData(response.data); // Almacena los datos en el estado
        //     } catch (err) {
        //       setError(err.message); // Maneja errores
        //     } finally {
        //       setLoading(false); // Finaliza la carga
        //     }
        //   };
      
        //   fetchData();
         
        // }, []);
       
        // useEffect(() => {
        //   if (data) {
        //     console.log(data)
        //   }
        // }, [data]);
      
        // if (loading) return <p>Loading...</p>;
        // if (error) return <p>Error: {error}</p>;
      