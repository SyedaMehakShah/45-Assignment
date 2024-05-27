
function create_car(manufacturer:string, model:string, ...option:any[]){
    let car = {
        manufacturers : manufacturer,
        models : model,
        option: option,
    };

    option.forEach((option:any) => {
        console.log(option);
        
    });
    return car;
}

let myCar = create_car("toyota","corrola","color : black");

console.log(myCar);

function add(n:number, n2:number) : number{
    return n+n2
}

add(7,3)