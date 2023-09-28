import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const SingleCharacter = () =>{ 
const { store, actions } = useContext(Context);
console.log(store.allTheCharacters, "allTheCharacters")
return (
  <div> 
    SingleCharacter
    </div>
);
}