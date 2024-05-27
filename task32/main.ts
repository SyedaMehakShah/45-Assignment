let current_users = ["ali","fiza","fatima","ayesha"];

let new_users = ["areeba","rifat","ali","ayesha"];

// loop through new_user check for username avaibility
new_users.forEach(new_one_users =>{
    // make a condition for username is already exists and save in our_condition variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase()
    )
    if(our_condition){
        console.log(`sorry ${new_one_users} is already taken!`);
        
    }else{
        console.log(`This username ${new_one_users} is available`);
        
    }
}
)