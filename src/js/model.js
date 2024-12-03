export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    // 'https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e880a'
  );
  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} ${res.status}`);

  let { recipe } = data.data;
  state.recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };

  console.log(state.recipe, 'from model before await');
};
