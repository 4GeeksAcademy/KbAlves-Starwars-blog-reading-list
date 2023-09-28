import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Episode = () =>{ 
const { store, actions } = useContext(Context);
console.log(store.allTheCharacters, "allTheCharacters")
return (
  <div class = "images"> 
  <div className ="cards d-flex ">
{store.allTheCharacters.map(
  (item,index)=> {

    return(
      <div class="card d-flex m3" style={{width: "18rem"}}>
        <img src={item?.image} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{item?.name}</h5>
        <p class="card-text">Gender: {item?.gender}</p>
        <p class="card-text">Species: {item?.species}</p>
        <p class="card-text">Staus: {item?.status}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
)}
</div>
</div>
);
}