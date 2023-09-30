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
  <div> 
    SingleLocation
    </div>
);
}