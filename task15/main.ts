let invitationArray :string[] = ["aqsa","fatima","areeba"];

let notAttend : string = "areeba"
console.log (`${notAttend}  can not make it for dinner`);

let newinvite  : string = "mehak"
invitationArray[invitationArray.indexOf(notAttend)]=newinvite; 
console.log(invitationArray);

invitationArray.map((item)=> console.log(`${item} you are invited to dinner `))