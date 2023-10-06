import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const SingleLocation = () =>{ 
const { store, actions } = useContext(Context);
console.log(store.AllTheLocation, "allTheLocation")
const params = useParams()
let locationId = params.theid
console.log(locationId,'THEID')
store.AllTheLocation[locationId]
console.log(store.AllTheLocation[locationId],'***LOCATION***')
return (
  <div className="container">
  <div className="photo">
    <img src={"https://weet.co.za/wp-content/uploads/2021/08/iStock-696834370-1024x576.jpg?x37230"} class="card-img-top" alt="..."/>
    <div>
      <h2>{store.AllTheLocation[locationId].name}</h2>
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
      <div>{store.AllTheLocation[locationId].name}</div>
    </div>
    <div className="allData">  
      <div className="footerName">Type</div>
      <div>{store.AllTheLocation[locationId].type}</div>
    </div>
    <div className="allData">
      <div className="footerName">Dimension</div>
      <div>{store.AllTheLocation[locationId].Dimension}</div>
    </div>  
   </div>   
</div>
);
}