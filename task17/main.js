"use strict";
var invitationArray = ["aqsa", "fatima", "areeba"];
var notAttend = "areeba";
console.log("".concat(notAttend, "  can not make it for dinner"));
invitationArray.unshift("aliza");
var newname = "rifat";
var middleguest = invitationArray.length / 2;
invitationArray.splice(middleguest, 0, newname);
invitationArray.push("amna");
console.log("we can only invite two people for dinner");
console.log(invitationArray);
while (invitationArray.length > 2) {
    let newnames = invitationArray.pop();
    console.log(`\n sorry ${newnames} we can't invite you to dinner!`);
}
invitationArray.map((item) => console.log(`\n ${item} you are still invited to dinner`));
invitationArray.pop();
invitationArray.pop();
console.log(invitationArray);
