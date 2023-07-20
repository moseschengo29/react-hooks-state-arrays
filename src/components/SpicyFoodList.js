import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    let newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleDeleteFood(id) {
    const updatedFoodsList = foods.filter((food) => food.id !== id);
    setFoods(updatedFoodsList);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      <button onClick={() => handleDeleteFood(food.id)}>Delete a Food</button>
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
