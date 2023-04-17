import React, {useState} from "react";

function PlantCard({plant}) {
const [inStock, setInStock] = useState(true)

const handleToggle = () => {
setInStock(!inStock)
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.image} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggle}>In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
