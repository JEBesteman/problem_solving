/**
 * CASE
 * 
 * Observe the following palindromes:
 * woord van links naar rechts = woord van rechts naar links
 * 
 * - eye
 * - race car
 * - never odd or even
 * - hello = false
 * 
 * write a function that accepts a stringS
 * and returns a boolean indicating whether S is a palindrome
 */

const isPalindrome = (input) => {
    //remove whitespace
    const str = input.replace(/\s/g, "");
    //create reverse string, eerste splitten van characters (array van maken om reverse() te gebruiken)
    const reverseStr = str.split("").reverse()
    // console.log(reverseStr)
    return str === reverseStr.join("");
    
    //of andere manier
    //middelpunt vinden
    // const halfLength = Math.floor(str.length / 2); 
    // console.log(halfLength)

    // for (let i = 0; i < str.length; i++) {
    //     //input beschouwen als array, ipv string....
    //     console.log(str[i], reverseStr[i]);
    //     if(str[i] !== reverseStr[i]) {
    //         return false;
    //     } 
        
    //     return true;

    // }
    
    
}

console.log(isPalindrome("race car")) //true
console.log(isPalindrome("helleo")) //false
// isPalindrome("eyeye")
console.log(isPalindrome("eye")) //true
console.log(isPalindrome("krijgnouwat"))


// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/