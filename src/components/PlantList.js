import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsArray}) {
const plantsRender = plantsArray.map((plant) => {
return <PlantCard plant={plant} key={plant.id}/>
})

  return (
    <ul className="cards">{plantsRender}</ul>
  );
}

export default PlantList;
