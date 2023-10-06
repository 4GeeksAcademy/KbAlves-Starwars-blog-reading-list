import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Episode = () =>{ 
const { store, actions } = useContext(Context);
return (
<div className="allCard">
  <div><h2>Episode</h2></div>
  <div class = "images"> 
    <div className ="cards d-flex ">
  {store.AllTheEpisode.map(
    (item,index)=> {

      return(
        <div class="card d-flex cardWithMargin" style={{width: "18rem"}}>
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97HnXKMQWMmkiFbReK4t9S8oxwVLphoV4fw&usqp=CAU'} class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title">{item?.name}</h5>
          <p class="card-text">Air date: {item?.air_date}</p>
          <p class="card-text">Episode: {item?.episode}</p>
          <div className="button-container">
            <Link to={"/singleEpisode/" + (index)} className="btn btn-dark">Learn more</Link>
            <button className="black-button" onClick={() => {
              actions.getFavorite(item?.name);
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