function show_magicians(magician : string[]){
    magician.forEach(name => console.log(name));
}
// function to make magician great through
function make_Great(magician : string[]){
   return magician.map(name => `The Great ${name}`);
}

// define magicine array
let magician_name : string[] = ["harry poter","hamza ","usman"];
let great_magicians = make_Great(magician_name);
 console.log(great_magicians);

show_magicians(great_magicians);