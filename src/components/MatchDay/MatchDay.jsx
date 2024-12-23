import React from 'react'
import useFetch from "../../hooks/useFetch.jsx"

const MatchDay = () => {
     const { data, loading, error } = useFetch(
        "api/v4/competitions/matches?dateFrom=2024-12-23?dateTo=2024-12-23",
        {
          headers: {
            "X-Auth-Token": "cdbabcd865b54d2e9243c3763f8540bf", // Reemplaza con tu API key
          },
        }
      );
  return (
    <div>MatchDay</div>
  )
}

export default MatchDay