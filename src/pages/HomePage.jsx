import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ChampionsLeague from "./ChampionsLeague";

const HomePage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [partidos, setPartidos] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "/api/v4/competitions/CL/matches?season=2024&matchday=1",
            {
              headers: {
                "X-Auth-Token": "cdbabcd865b54d2e9243c3763f8540bf", // Reemplaza con tu API key
              },
            }
          );
  
          setData(response.data); // Almacena los datos en el estado
        } catch (err) {
          setError(err.message); // Maneja errores
        } finally {
          setLoading(false); // Finaliza la carga
        }
      };
  
      fetchData();
    }, []); // El segundo parámetro [] asegura que se ejecute solo una vez
  
    // Este efecto se asegura de que partidos se actualice solo cuando data cambie
    useEffect(() => {
      if (data?.matches) {
        setPartidos(data.matches);
      }
    }, [data]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h1>Fetched Data:</h1>
        {data?.competition?.emblem && (
          <img src={data.competition.emblem} alt="Competition emblem" />
        )}
        {partidos && (
          <ul>
            {partidos.map((match, index) => (
              <li key={index}>{match.homeTeam.name} vs {match.awayTeam.name}</li>
            ))}
          </ul>
        )}
        {<Link to="/champions-league">
        <span>CHAMPIONS LEAGUE PAGE</span>
        </Link>}
      </div>
    );
  };
  


export default HomePage