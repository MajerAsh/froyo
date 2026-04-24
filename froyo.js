/* -------- > test, covert string to lowercase array: 
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

  let flavChoices = input.toLowerCase().replaceAll(" ", "").split(",");

  /* try1:
  const countEach = flavChoices.reduce((acc, curr) =>
  (acc !== curr ? 0 : 1), []);*/

  const countEach = flavChoices.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  console.log(countEach);
} // END
