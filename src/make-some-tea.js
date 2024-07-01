const ingredients = ['water', 'tea', 'ginger', 'cardamom', 'milk'];//sorted
const quantities = ['0.25 Litres', '1 tablespoon', '0.5 ounces', '2 pieces', '0.10 Litres'];//sorted
const waitTimes = [5, 3, 3, 3, 30]; //sorted in seconds


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function wait(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

async function makeTea() {
  console.log("Starting to make tea...\n");

  for (let i = 0; i < ingredients.length; i++) {
    console.log(`Adding ${quantities[i]} of ${ingredients[i]}...`);
    // await delay(1000);
    console.log(`Boiling for ${waitTimes[i]} seconds...\n`);
    await delay(waitTimes[i] * 1000);
  }

  console.log("Tea is ready! Enjoy your drink.");
}

async function updateIngredients(ingredient, insertposition) {
  ingredients.splice(insertposition, 0, ingredient)
}

async function updateQuantities(quantity, insertposition) {
  quantities.splice(insertposition, 0, quantity)
}

async function updateWaitTimes(boilingtime, insertposition) {
  waitTimes.splice(insertposition, 0, boilingtime)
}

async function addIngredient(ingredient, quantity, boilingtime, insertposition) {
  console.log('You forgot to include the SUGAR into the INGREDIENTS...')
  await updateIngredients(ingredient, insertposition - 1)
  await updateQuantities(quantity, insertposition - 1)
  await updateWaitTimes(boilingtime, insertposition - 1)
  await delay(1000);
}

async function showIngredients() {
  console.log('Our Ingredients:\n')
  await delay(1000);
  for (let i = 0; i < ingredients.length; i++) {
    console.log(` ${quantities[i]} of ${ingredients[i].toUpperCase()} with Boiling Time of ${waitTimes[i]} \n`);
    await delay(500);
  }
  await delay(1000);

}

async function showTea() {
  console.log(`
████████╗███████╗ █████╗ 
╚══██╔══╝██╔════╝██╔══██╗
   ██║   █████╗  ███████║
   ██║   ██╔══╝  ██╔══██║
   ██║   ███████╗██║  ██║
   ╚═╝   ╚══════╝╚═╝  ╚═╝
                         
`)

}

async function main() {
  await addIngredient('sugar', '3 tablespoon', 5, 5);
  await showIngredients();
  await makeTea();
  await showTea();
}


main();