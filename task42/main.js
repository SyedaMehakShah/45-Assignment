"use strict";
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
function make_Great(magician) {
    return magician.map(name => `The Great ${name}`);
}
let magician_name = ["harry poter", "hamza ", "usman"];
let great_magicians = make_Great(magician_name);
console.log(great_magicians);
show_magicians(great_magicians);
