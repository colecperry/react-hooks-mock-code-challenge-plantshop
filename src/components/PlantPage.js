import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plantsArray, setPlantsArray] = useState([]);
const [searchInput, setSearchInput] = useState("")

const handleNewPlant = (shinyNewPlant => {
  setPlantsArray([...plantsArray, shinyNewPlant])
})

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(resp => resp.json())
  .then(setPlantsArray)
}, [])
//console.log(plantsArray);

const updateSearch = (input) => {
setSearchInput(input)
}

const filterPlants = plantsArray.filter((plant) => {
    return plant.name.toLowerCase().includes(searchInput.toLowerCase())
  })

// const filterPlants = () => {
//   if (searchInput === "") {
//     return plantsArray
//   } else {
//   return plantsArray.filter((plant) => {
//     return plant.name.toLowerCase().includes(searchInput.toLowerCase())
//   })
// }
// }


  return (
    <main>
      <NewPlantForm handleNewPlant = {handleNewPlant}/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} updateSearch={updateSearch}/>
      <PlantList plantsArray={filterPlants}/>
    </main>
  );
}

export default PlantPage;
