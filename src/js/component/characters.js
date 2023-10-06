import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Characters = () =>{ 
const { store, actions } = useContext(Context);
const [corBotao, setCorBotao] = useState("black");

return (
<div className="allCard">
  <div><h2>Characters</h2></div>
  <div class = "images">
  <div className ="cards d-flex "> 
{store.AllTheCharacters.map(
  (item,index)=> {
    return(
      <div class="card d-flex cardWithMargin" style={{width: "18rem"}}>
        <img src={item?.image} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{item?.name}</h5>
        <p class="card-text">Gender: {item?.gender}</p>
        <p class="card-text">Species: {item?.species}</p>
        <p class="card-text">Staus: {item?.status}</p>
        <div className="button-container">
          <Link to={"/singleCharacter/" + (index)} className="btn btn-dark">Learn more</Link>
          <button className="black-button" onClick={() => {
            actions.getFavorite(item?.name);
            console.log(store.Favorites, "Favorites***");
          }}>
            <i class="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
      
    );
  }
)}
</div>
  </div>
</div>
);
}