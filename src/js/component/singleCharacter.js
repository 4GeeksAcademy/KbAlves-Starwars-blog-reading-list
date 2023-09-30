import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const SingleCharacter = () =>{ 
const { store, actions } = useContext(Context);
console.log(store.AllTheCharacters, "allTheCharacters")
const params = useParams()
let characterId = params.theid
console.log(characterId,'THEID')

console.log(store.AllTheCharacters[characterId],'***THEID')
return (
  <div> 
    Number of appearances: {store.AllTheCharacters[characterId].episode.length}
    </div>
);
}