var invitationArray = ["aqsa", "fatima", "areeba"];
var notAttend = "areeba";

console.log("".concat(notAttend, "  can not make it for dinner"));
var newinvite = "mehak";

invitationArray[invitationArray.indexOf(notAttend)] = newinvite;
console.log("welcome all we found a bigger table !");
invitationArray.unshift("aliza");
var newname = "rifat";
var middleguest = invitationArray.length / 2;
invitationArray.splice(middleguest, 0, newname);
invitationArray.push("amna");
invitationArray.map((item)=> console.log(`${item},  you are invited to dinner! `));

