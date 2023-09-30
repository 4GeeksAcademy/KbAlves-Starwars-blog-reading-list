import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Episode = () =>{ 
const { store, actions } = useContext(Context);
console.log(store.AllTheEpisode, "allTheEpisode")
return (
  <div class = "images"> 
  <div className ="cards d-flex ">
{store.AllTheEpisode.map(
  (item,index)=> {

    return(
      <div class="card d-flex m3" style={{width: "18rem"}}>
        <img src={'https://weet.co.za/wp-content/uploads/2021/08/iStock-696834370-1024x576.jpg?x37230'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{item?.name}</h5>
        <p class="card-text">Air date: {item?.air_date}</p>
        <p class="card-text">Episode: {item?.episode}</p>
        <Link to={"/singleEpisode/" + (index)}>
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