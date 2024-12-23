import { useEffect, useState } from "react"
import React from 'react'
import useFetch from "../../hooks/useFetch.jsx"

const SerieAMatchDay = () => {
    const { data, loading, error } = useFetch(
    `api/v4/competitions/SA/matches?dateFrom=${}Date24-12-23`
        ,
          {
            headers: {
              "X-Auth-Token": "cdbabcd865b54d2e9243c3763f8540bf", // Reemplaza con tu API key
            },
          }
        );
  
        useEffect(()=>{
          if(data){
            console.log(data)
          }
        },[data])
  
  
  return (
    <div>
     {data !== null ? <span>Hay partidos de la serie A el dia de hoy</span> : null}
    </div>
  )
}

export default SerieAMatchDay
