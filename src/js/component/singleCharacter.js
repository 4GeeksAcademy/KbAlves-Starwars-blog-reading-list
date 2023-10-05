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
  <div className="container">
    <div className="photo">
      <img src={store.AllTheCharacters[characterId].image} class="card-img-top" alt="..."/>
      <div>
        <h2>Rick and Morty Series Description</h2>
        <p class="paragrafo">Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe. Rick Sanchez is living with his daughter Beth’s family and constantly bringing her, his son-in-law Jerry, granddaughter Summer, and grandson Morty into intergalactic escapades. </p>
        <p class="paragrafo">Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke (Scrubs), Chris Parnell (Saturday Night Live), and Spencer Grammer (Greek). The series is created by Dan Harmon (Community) and Roiland, who also serve as executive producers.  </p>
        <p class="paragrafo">Rick and Morty season 4 premieres this November on Adult Swim.</p>
      </div>
    </div>
      <hr></hr>  
    <div className="allInfo">
      <div className="allData">
        <div>Name</div>
        <div>{store.AllTheCharacters[characterId].name}</div>
      </div>
      <div className="allData">  
        <div>Status</div>
        <div>{store.AllTheCharacters[characterId].status}</div>
      </div>
      <div className="allData">
        <div>Species</div>
        <div>{store.AllTheCharacters[characterId].species}</div>
      </div>  
      <div className="allData">
        <div>Gender</div>
        <div>{store.AllTheCharacters[characterId].gender}</div>
      </div>
      <div className="allData">
        <div>Origin</div>
        <div>{store.AllTheCharacters[characterId].origin.name}</div>
      </div>
      <div className="allData">
        <div>Number of episodes</div>
        <div>{store.AllTheCharacters[characterId].episode.length}</div>
      </div>
     </div>   
  </div>
);
}