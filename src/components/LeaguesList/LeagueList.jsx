import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { list } from "postcss";
import { Key } from "phosphor-react";

const LeagueList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [competitions, setCompetitions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v4/competitions", {
          headers: {
            "X-Auth-Token": "cdbabcd865b54d2e9243c3763f8540bf", // Reemplaza con tu API key
          },
        });

        setData(response.data);
      } catch (err) {
        console.error("Error al obtener los datos:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data?.competitions) {
      setCompetitions(data.competitions);
    }
  }, [data]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No hay datos disponibles.</p>;
  return (
    <ul className="grid grid-rows-2 grid-cols-7 gap-10 px-10 py-10">
      {competitions.map((item)  => (
        <li key={item.id}>
          <img className="h-32" src={item.emblem} alt="liga-imagen" />
        </li>
      ))}
    </ul>
  );
};

export default LeagueList;
