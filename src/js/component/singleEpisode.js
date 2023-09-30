import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const SingleEpisode = () =>{ 
const { store, actions } = useContext(Context);
console.log(store.AllTheEpisode, "allTheEpisode")
const params = useParams()
let episodeId = params.theid
console.log(episodeId,'THEID')
store.AllTheEpisode[episodeId]
console.log(store.AllTheEpisode[episodeId],'***EPISODE***')
return (
  <div> 
    SingleEpisode
    </div>
);
}