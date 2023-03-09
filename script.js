// Keys array
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
// Notes in a blank array
const notes = [];
keys.forEach(function(key) {
    notes.push(document.getElementById(key));
})

// Function that changes the color of the keys
// Function with event handler properties