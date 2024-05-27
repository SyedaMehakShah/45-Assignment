

// creat an array
let userName : string[] = ["mehak","areeba","rifat","admin","ali"];

// using forEach loop on array
userName.forEach(oneUser =>{
    if(oneUser === "admin"){
        console.log(`hello ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`hello ${oneUser},thank you for logging in again.`);       
    }
})