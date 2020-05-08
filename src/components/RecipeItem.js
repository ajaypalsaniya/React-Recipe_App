import React from "react";

const RecipeItem = (props) => {
  const {name,image, ingredientLines } = props;

  return (
    <div>
      <div className="card py-3 text-center">
        <img
          src={image}
          className="img-fluid w-50 mx-auto rounded-circle rounded-lg"
          alt="Loading..."
        />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {ingredientLines.map((ing) => (
            <li className="list-group-item">{ing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RecipeItem;
