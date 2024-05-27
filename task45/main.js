"use strict";
function create_car(manufacturer, model, ...option) {
    let car = {
        manufacturers: manufacturer,
        models: model,
        option: option,
    };
    option.forEach((option) => {
        console.log(option);
    });
    return car;
}
let myCar = create_car("toyota", "corrola", "color : black");
console.log(myCar);
function add(n, n2) {
    return n + n2;
}
add(7, 3);
