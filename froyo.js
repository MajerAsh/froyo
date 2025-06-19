let str = prompt(
  "Please enter your flavor choices seperated by a comma:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// split definition: divide a string into an ordered list of substrings, placing these substrings into an array and returning the
//  new array. It does not directly "split" an existing array into multiple arrays based on a separator like it does for strings.

const flavorarray = str.split(",");
let flavorobj = {};
//starts iteration below. Calling each element flavor
flavorarray.forEach(function (flavor) {
  if (flavor in flavorobj) {
    //if this flavor is a key in flavorobj then...
    flavorobj[flavor]++; // add 1 to the total
  } else {
    // if the flavor is not a key in flavorobj then...
    flavorobj[flavor] = 1; // creates key and assigns it a value (1)
  }
});
console.table(flavorobj);
