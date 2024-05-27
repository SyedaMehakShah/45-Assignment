function make_shirt (size :string = "large ",printMessage :string = "I love typescript"){
    console.log(`creat ${size} size shirt with ${printMessage} print on shirt`);
}

// called function with  a default value 

make_shirt()

make_shirt("medium")

make_shirt("small","I love javascript")