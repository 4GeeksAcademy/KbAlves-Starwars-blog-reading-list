import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const SingleEpisode = () =>{ 
const { store, actions } = useContext(Context);
const params = useParams()
let episodeId = params.theid
store.AllTheEpisode[episodeId]
return (
    <div className="container">
    <div className="photo">
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97HnXKMQWMmkiFbReK4t9S8oxwVLphoV4fw&usqp=CAU"} class="card-img-top" alt="..."/>
      <div>
        <h2>{store.AllTheEpisode[episodeId].name}</h2>
        <hr></hr>
        <h5>Rick and Morty Series Description</h5>
        <p class="paragrafo">Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe. Rick Sanchez is living with his daughter Beth’s family and constantly bringing her, his son-in-law Jerry, granddaughter Summer, and grandson Morty into intergalactic escapades. </p>
        <p class="paragrafo">Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke (Scrubs), Chris Parnell (Saturday Night Live), and Spencer Grammer (Greek). The series is created by Dan Harmon (Community) and Roiland, who also serve as executive producers.  </p>
      </div>
    </div>
      <hr></hr>  
    <div className="allInfo">
      <div className="allData">
        <div className="footerName">Name</div>
        <div>{store.AllTheEpisode[episodeId].name}</div>
      </div>
      <div className="allData">  
        <div className="footerName">Air Date</div>
        <div>{store.AllTheEpisode[episodeId].air_date}</div>
      </div>
      <div className="allData">
        <div className="footerName">Episode</div>
        <div>{store.AllTheEpisode[episodeId].episode}</div>
      </div>  
     </div>   
  </div>
);
}