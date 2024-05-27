"use strict";
function make_sandwish(...items) {
    console.log("\n Making a sandwish with the following item \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n now enjoy this sandwish");
}
make_sandwish("Egg", "chicken", "mayo");
make_sandwish("egg", "chicken");
