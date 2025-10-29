import React from "react";
import {Card} from "./Card";
function Grid() {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Card />
          </div>
          <div class="col">
            <Card />
          </div>
          <div class="col">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Grid };
