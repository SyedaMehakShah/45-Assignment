// creat an array
var userName = ["mehak", "areeba", "rifat", "admin", "ali"];
// using forEach loop on array
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ",thank you for logging in again."));
    }
});
