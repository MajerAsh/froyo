/* node froyo.js 

NOTE:
-- prompt() function is a Web API that exists only in web browsers. 
If you are running your code in Node.js, this function does not exist


-------- > test, covert string to lowercase array: 
const str = "jjf uGGo ,   jJJJj ,kk ll   ,    ooo, o";

str.toLowerCase().replaceAll(" ", "").split(",");
console.log(str); // jjf uGGo ,   jJJJj ,kk ll   ,    ooo, o

const newStr = str.toLowerCase().replaceAll(" ", "").split(",");
console.log(newStr); // [ 'jjfuggo', 'jjjjj', 'kkll', 'ooo', 'o' ]
*/
/// -------------------> Froyo Assignment: <-----------------------------
// vanilla,vanilla,vanilla,strawberry,coffee,coffee
{
  const input = prompt(
    "Welcome! Please, enter your flavor selections seperated by a comma.",
  );
  alert(
    "Check the browser console to see how many of each flavor you ordered.",
  );

  // 4. Parse the user input into an array:
  let flavChoices = input.toLowerCase().replaceAll(" ", "").split(",");

  // 5. Build an object to track which flavors you have counted so far:
  // With reduce:
  const countEach = flavChoices.reduce((acc, flav) => {
    acc[flav] = (acc[flav] || 0) + 1; // If the flav exists, increment it in our empty obj {}; otherwise, initialize it to 1
    return acc;
  }, {});
  console.log(countEach);

  /* Marc's work---------------------------------------------------------:
  const parseArray = userInput => input.toLowerCase().replaceAll(" ", "").split(",");

  const countTheFlavors = (flaveys) => {
    
    return flaveys.reduce((acc, flav) => {
      acc[flav] = (acc[flav] || 0) + 1; // If the flav exists, increment it in our empty obj {}; otherwise, initialize it to 1
      return acc;
    }, {});
  };

  const countFlavor = (renamedInput) => {
    const parsedInput = parseArray(renamedInput);
    const 
     = countTheFlavors(parsedInput);
    return countTheFlavors();
  };
  countFlavor(flavChoices);
  --------------------------------------------------------------*/

  /* With forEach:
  const countFlavs = {};

  flavChoices.forEach((flav) => {
    countFlavs[flav] = (countFlavs[flav] || 0) + 1; //*
  });
  console.log(countFlavs);
  
  //* The || 0 handles the first time a flavor is seen — since countFlavs[flav] is undefined at that point, 
  undefined || 0 gives you 0, then + 1 makes it 1. So yes, it effectively initializes to 1 on first encounter.
  For this same line you could also do:
  countFlavs[flav] ? countFlavs[flav] += 1 : countFlavs[flav] = 1
  
  Or, more complicated:
  if (countFlavs[flav]) {
  countFlavs[flav] += 1;
} else {
  countFlavs[flav] = 1;
}*/

  // 6. How should that object be updated as you iterate through the array of flavors? if the flav desnt exists, initialize it at 0 then, add 1

  // 7. Are you using functions?
} // END
