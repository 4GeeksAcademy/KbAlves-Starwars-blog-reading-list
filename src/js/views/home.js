import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Episode } from "../component/episode";
import { Location } from "../component/location";

export const Home = () =>{ 
const { store, actions } = useContext(Context);
return (
  <div>
    <Characters />
    <Episode />
    <Location />
  </div>
);
}
