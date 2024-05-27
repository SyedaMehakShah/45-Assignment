// Store the locations in an array
let placesToVisit = ["Japan", "Iceland", "Australia", "Italy", "Canada"];

// Print your array in its original order
console.log("Original order:", placesToVisit);

// Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that your array is still in its original order by printing it
console.log("Original order:", placesToVisit);

 // Print your array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that your array is still in its original order by printing it again
console.log("Original order:", placesToVisit);

// Reverse the order of your list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);


// Sort your array so it’s stored in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);

// Sort to change your array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", placesToVisit);

