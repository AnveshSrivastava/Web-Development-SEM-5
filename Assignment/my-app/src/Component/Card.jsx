import React from "react";

function Card(props) {
  return (
    <div>
      <div class="card" style={{width: 18 + "rem"}}>
        <h5 class="card-title">{props.name}</h5>
        <img src={props.src} style={{height:20+"px", width:20+"px", borderRadius:50+"%"}} alt="img"></img>
        <div class="card-body">
          <p class="card-text">
            {props.rate}
          </p>
        </div>
      </div>
    </div>
  );
}

export { Card };
