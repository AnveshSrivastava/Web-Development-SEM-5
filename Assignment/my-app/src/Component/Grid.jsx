import React from "react";
import {Card} from "./Card";
function Grid() {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Card name = "Pizza" age ={100.00} src = ""/>
          </div>
          <div class="col">
            <Card name = "Maggie" age ={205.50} src = ""/>
          </div>
          <div class="col">
            <Card name = "Paneer" age = {350.12} src =""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Grid };
