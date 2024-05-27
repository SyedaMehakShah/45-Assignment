"use strict";
let invitationArray = ["aqsa", "fatima", "areeba"];
let notAttend = "areeba";
console.log(`${notAttend}  can not make it for dinner`);
let newinvite = "mehak";
invitationArray[invitationArray.indexOf(notAttend)] = newinvite;
console.log(invitationArray);
invitationArray.map((item) => console.log(`${item} you are invited to dinner `));
