import "./styles/index.scss"
const elvenShieldRecipe = {
    letherStrip:2,
    ironIngot: 1,
    refiendMoonstone:4,
};

const elevnGountletsRecipe= {
    ...elvenShieldRecipe,
    lether:1,
    refiendMoonstone: 4,
}
console.log(elvenShieldRecipe)
console.log(elevnGountletsRecipe)