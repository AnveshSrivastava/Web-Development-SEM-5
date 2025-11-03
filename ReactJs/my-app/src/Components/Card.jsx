import React from "react";

function Card(props) {
  return (
    <div>
      <div class="card" style={{width: 18 + "rem"}}>
        <img src="..//assets/image.png" style={{height:20+"px", width:20+"px", borderRadius:50+"%"}}></img>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Age is {props.age}.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export { Card };
