import { useState } from 'react'

const elvenShieldRecipe = {
    letherStrip: 2,
    ironIngot: 1,
    refiendMoonstone: 4,
};

const elevnGountletsRecipe = {
    ...elvenShieldRecipe,
    lether: 1,
    refiendMoonstone: 4,
}
console.log(elvenShieldRecipe)
console.log(elevnGountletsRecipe)
import React from 'react'

const Recipes = () => {
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipe(elevnGountletsRecipe)}>Elven Gountlets Recipe</button>
            <ul>
                {Object.keys(recipe).map((material) =>(
                <li key={material}>
                    {material}: {recipe[material]}
                </li>
                ))}
            </ul>


        </div>
    )
}

export default Recipes
