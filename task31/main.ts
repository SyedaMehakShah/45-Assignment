
let userName : string[] = ["mehak","areeba","rifat","admin","ali"];

userName = []

if(userName.length === 0){
    console.log("your array is empty We need to find some users!");
}else{
    userName.forEach(oneUser =>{
        if(oneUser === "admin"){
            console.log(`hello ${oneUser}, would you like to see a status report?`);
        }else{
            console.log(`hello ${oneUser},thank you for logging in again.`);       
        }
    })
}