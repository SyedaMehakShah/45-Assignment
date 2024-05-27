function show_magicians(magician : string[]){
    magician.forEach(name => console.log(name));
}
// function to make magician great through
function make_Great(magician : string[]){
   return magician.map(name => `The Great ${name}`);
}

// define magicine array
let magician_name : string[] = ["harry poter","hamza ","usman"];

// making copy of array through splice() function

let copy_magician = magician_name.slice()

// modifidy copied array
let copy_great_magician = make_Great(copy_magician)

// original
show_magicians(magician_name);

// copied
show_magicians(copy_great_magician);