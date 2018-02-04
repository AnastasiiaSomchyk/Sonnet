// // Paste the code below into your HTML file.
// ////Done.

// // Take the contents of the sonnet div and place it in a variable.
var contentSonnet = document.getElementById("sonnet").innerText;
console.log(contentSonnet);

// // Find and output the starting position of the word "orphans".
var orphansPosition = contentSonnet.indexOf("orphans");
console.log(orphansPosition);

// // Output the number of characters in the sonnet.
var sonnetNumber = contentSonnet.length;
console.log(sonnetNumber);


// // Replace the first occurance of the string "winter" with "yuletide".

contentSonnet = contentSonnet.replace("winter", "yuletide");
console.log(contentSonnet);

// // Replace all occurances of the string "the" with "a large".

contentSonnet = contentSonnet.replace(/the/g, "a large")
console.log(contentSonnet);


// // Set the content of the sonnet div with the new string.

var newSonnet = document.getElementById("sonnet")
newSonnet.innerHTML = sonnet;







