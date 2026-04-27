/* node froyo.js 

NOTE:
prompt() function is a Web API that exists only in web browsers. 
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
  // With forEach:
  const countFlavs = {};

  flavChoices.forEach((flav) => {
    countFlavs[flav] = (countFlavs[flav] || 0) + 1;
  });
  console.log(countFlavs);

  // With reduce:
  const countEach = flavChoices.reduce((acc, flav) => {
    acc[flav] = (acc[flav] || 0) + 1; // If the fruit exists, increment it in our empty obj {}; otherwise, initialize it to 1
    return acc;
  }, {});
  console.log(countEach);
} // END
