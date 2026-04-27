// node froyoToFunc.js

// --------- Turn froyo into a reusable function: -----------------------

// ----------------- froyo:
// 4. Parse the user input into an array:
let flavChoices = input.toLowerCase().replaceAll(" ", "").split(",");

// 5. Build an object to track which flavors you have counted so far:
// With reduce:
const countEach = flavChoices.reduce((acc, flav) => {
  acc[flav] = (acc[flav] || 0) + 1; // If the flav exists, increment it in our empty obj {}; otherwise, initialize it to 1
  return acc;
}, {});
console.log(countEach);

// --------------- Conversion:
// 1) put a function shell around the logic:
//function countFlavors() {}

// 2) Paste the basic work/ logic inside the func:
function countFlavors() {
  let flavChoices = input.toLowerCase().replaceAll(" ", "").split(",");

  const countEach = flavChoices.reduce((acc, flav) => {
    acc[flav] = (acc[flav] || 0) + 1;
    return acc;
  }, {});
  console.log(countEach);
}

// 3) Replace hardcoded variable with a nuetral parameter and return instead of logging:
function countFlavors(input) {
  // -- input is now a parameter bc* its the one thing that changes each time/ the ultimate unknown
  let flavChoices = input.toLowerCase().replaceAll(" ", "").split(",");

  const countEach = flavChoices.reduce((acc, flav) => {
    acc[flav] = (acc[flav] || 0) + 1;
    return acc;
  }, {});
  return countEach; // <-- trade the log for a return
}

// 4) Call it from outside:
const input = prompt(
  "Welcome! Please enter your flavor selections separated by a comma.",
);
console.log(countFlavors(input));

// ++++ 5) If you want a arrow func:
const countFlavors = (input) => {
  const flavChoices = input.toLowerCase().replaceAll(" ", "").split(",");

  return flavChoices.reduce((acc, flav) => {
    acc[flav] = (acc[flav] || 0) + 1;
    return acc;
  }, {});
};

/* *
You already had input as a variable name in your code, this line:   let flavChoices = input.toLowerCase().replaceAll(" ", "").split(",");
so keeping it as the parameter name meant you didn't have to rename anything inside the function — it just slotted in cleanly.
It's the unknown piece — everything else in the function is predictable logic that runs the same way every time. 
input is the only thing that changes depending on what the user types.*/
