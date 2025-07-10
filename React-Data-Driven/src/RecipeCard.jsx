import React from "react";

export const RecipeCard = ({ recipe }) => (
    <div className="recipe-card">
        <h2>{recipe.name}</h2>
        <ul>
            {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <p>{recipe.instructions}</p>
    </div>
);

export default RecipeCard;