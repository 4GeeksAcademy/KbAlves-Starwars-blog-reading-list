import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
export const Characters = () =>{ 
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
        <Link to={"/singleCharacter/" + (index+1)}>
        <a href="#" class="btn btn-primary">Learn more</a>
		</Link>

        </div>
      </div>
    );
  }
)}
</div>
</div>
);
}