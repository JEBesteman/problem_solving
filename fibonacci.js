/*
* CASE
*
* Observe the Fibonacci sequence:
*
* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, .....
* 5 = 2 + 3, 8 = 5 + 3
* write a function that accepts a number X
* and prints X numbers of the Fibonacci sequence.
* eerste 2 getallen zijn altijd 0 en 1!
*/
//idee fib(7) console.log 7 nummers
// fib(7) //0, 1, 1, 2, 3, 5, 8

// fib(9) //0, 1, 1, 2, 3, 5, 8, 13, 21

const fib = (num) => {
    let first = 0;
    let second = 1;
    let next = 0;
    
    for(let i = 0; i < num; i++) {
        console.log(first)
        next = first + second;
        first = second;
        second = next;
        //laatste getal wordt 2e, en 2e getal wordt de eerste 1 + 2 = 3 -> 3 + 2 = 5
        
    }
}

// fib(5)
// fib(9)
// console.log("***")
// fib(13) //0 1 1 2 3 5 8 13 21 34 55 89 144
// fib(19) // 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584

//kan ook:
// const fib2 = (num) => {
//     const array = [0, 1];
//     for(let i = 0; i < num; i++) {
//         let sum = array[i - 1] + array[i - 2]
//         console.log(sum)
//         array.push(sum)
//     }
// }

// console.log(fib2(5))
//klopt nog niet helemaal, erg gevoelig voor fouten!!