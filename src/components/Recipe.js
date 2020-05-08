import React from "react";
import RecipeItem from "./RecipeItem"

const Recipe = (props) => {
  const { recipes } = props;
  return (
    <div className="card-columns mx-auto"> 
      {recipes.map((recipe) => (
        <RecipeItem
          key={Math.random()*100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
          totalNutrients={recipe.recipe.totalNutrients}
        />
      ))}
    </div>
  );
};

export default Recipe;
