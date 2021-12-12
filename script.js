/* CASE
 *
 * write a function that accepts a list of numbers L
 * and returns true if the list is ascending, false otherwise
 *
 * Example:
 *
 * 0, 1, 2, 3, 4 = true
 * 0, 1, 2, 3, 8 = true
 * 0, 1, 2, 3, 2 = false
 * 0, 1, 1, 1, 1 = false
 * 5, 4, 3, 2, 1 = false
 */

//kan ook: for (num of myArray) {}

const isAscending = (myArray) => {
  let result = false;

  for (let i = 0; i < myArray.length -1; i++) {
    const num = myArray[i];
    const nextNum = myArray[i + 1] 
    if (nextNum > num) {
      console.log(`${nextNum} > ${num}`);
      result = true;
    } else {
        // if(num < nextNum) {
        //     result = false;
        // }
        // if(num === nextNum) {
        //     result = false;
        // }
        //hoeft niet want alleen ascending ja of nee is genoeg 
        result = false;
    }
  }
  return result;
};

console.log(isAscending([0, 1, 2, 3, 4])) //true
console.log(isAscending([0, 1, 2, 3, 8]))//true
console.log(isAscending([0, 1, 2, 3, 2])) //false
console.log(isAscending([0, 1, 1, 1, 1])) //false
console.log(isAscending([5, 4, 3, 2, 1])) //false
console.log(isAscending([-10, 33, 45, 99, 1222])) //true
