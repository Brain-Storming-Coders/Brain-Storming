import React from "react";
import { ReactDOM } from "react";
import { useEffect } from "react";

const Cards = ({name})=> {

    return(
    <div className="card">
    <div className="image">
      <div>
        <img src="https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_960_720.png"></img>
      </div>
    </div>
    <div className="info">
      <h2>{name}</h2>
      <p>Electron</p>
    </div>
    <div className="info2">
      <button className="btn-know-more">More</button>
    </div>
  </div>
  )
}

export default Cards;