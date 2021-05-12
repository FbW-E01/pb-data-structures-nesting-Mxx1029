// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

for (const i of board[0]) {
    console.log(i);
};
for (const i of board[1]) {
    console.log(i);
};
for (const i of board[2]) {
    console.log(i);
};

// tip by Milad, it does the same :
for (let i = 0; i < board.length; i++) { 
    for (let j = 0; j < board[i].length; j++) { 
        console.log(board[i][j]); 
    }; 
};

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
const doggo = { firstName: "Ruru", breed: "Corgi"};

// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
doggo.favoriteFoods = ["shoes", "carrots", "broccoli", "dog sausage"];
console.log(doggo);

// * 2.3 Access the second element of the doggo's favorite foods. 
console.log(doggo.favoriteFoods[1]);

// * 2.4 Add a method that loops through and print all the doggo's favorite food.
doggo.printFavoriteFoods = function() {
    for (const i of doggo.favoriteFoods) {
        console.log(i);
    };
};
doggo.printFavoriteFoods();

// #### 3. 
// * 3.1 Create an object called recipes.
const recipes = {};

// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
recipes.ingredients = {butter: "2 cups", sugar: "1 cup", flour: "3 cups"};
console.log(recipes);

// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
recipes.ingredients.ginger = "1 tablespoon";
console.log(recipes);

// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
const brownSugar = recipes.ingredients.sugar;
delete recipes.ingredients.sugar;
recipes.ingredients.brownSugar = brownSugar;
console.log(recipes);

// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 
recipes.printIngredientsValues = function() {
    for (const key in recipes.ingredients) {
        const value = recipes.ingredients[key]
        console.log(key, value);
        // or just the values, but for recipes it makes more sense to also know how many cups of what, no?
    };
};

recipes.printIngredientsValues();
