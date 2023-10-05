import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link } from "react-router-dom";
export const Characters = () =>{ 
const { store, actions } = useContext(Context);

return (
<div><div><h2>Characters</h2></div>
  <div class = "images">
  <div className ="cards d-flex "> 
{store.AllTheCharacters.map(
  (item,index)=> {
    return(
      <div class="card d-flex m3" style={{width: "18rem"}}>
        <img src={item?.image} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{item?.name}</h5>
        <p class="card-text">Gender: {item?.gender}</p>
        <p class="card-text">Species: {item?.species}</p>
        <p class="card-text">Staus: {item?.status}</p>
        <Link to={"/singleCharacter/" + (index)}>
        <a href="#" class="btn btn-primary">Learn more</a>
        </Link>
        <button onClick={()=>{
          actions.getFavorite(item?.name)
          console.log(store.Favorites, "Favorites***")
          }}>
            <i class="far fa-heart"></i>
          </button>
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