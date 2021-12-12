const animals = [
  {
    name: "monkey",
    food: "bananas",
    weight: 60,
    max_age: 30,
    continent: "Africa",
    flies: false,
    nocturnal: false,
  },
  {
    name: "rhino",
    food: "grass",
    weight: 800,
    max_age: 40,
    continent: "Africa",
    flies: false,
    nocturnal: false,
  },
  {
    name: "bat",
    food: "insects",
    weight: 1,
    max_age: 5,
    continent: "Asia",
    flies: true,
    nocturnal: true,
  },
  {
    name: "tapir",
    food: "insects",
    weight: 20,
    max_age: 80,
    continent: "South_America",
    flies: false,
    nocturnal: true,
  },
  {
    name: "lion",
    food: "meat",
    weight: 200,
    max_age: 50,
    continent: "Africa",
    flies: false,
    nocturnal: true,
  },
  {
    name: "cow",
    food: "grass",
    weight: 600,
    max_age: 60,
    continent: "Europe",
    flies: false,
    nocturnal: false,
  },
  {
    name: "moes",
    food: "grass",
    weight: 800,
    max_age: 60,
    continent: "europe",
    flies: false,
    nocturnal: false,
  },
];

//opdracht we hebben een array van 6 dieren
//Elk dier heeft een naam, een soort eten, een gewicht, een maximale leeftijd en een cintinent, kan vliegen, is nachtdier.
//Schrijf een functie voor de volgende features. Je mag alleen de volgende concepten gebruiken:

/* - functie
 * - array methods: filter, sort, reduce, every
 * - les een waarde van een object
 * - lee het aantal elementen in een array
 * - string methods: join
 * - optellen, delen
 * - hebben 2 variabelen dezelfde waarde? en niet.
 * - pak een element uit een array
 */

//Hoeveel vleeseters zijn er?
//filter --> animal.food === meat (of insects?)
//length van dat array --> hoeveelheid vleeseters
//pseudocode eerst
// 1: pak alle dieren --> functie
// 2: bepaal wat ze eten --> lees waarde van object
// 3: bepaal of een dier carnivoor is --> hebben 2 variabelen dezelfde waarde? en niet. => ("meat", food)
// 4: bepaal welke dieren carnivoor is --> array.filter
// 5: bepaal hoeveel dieren carnivoor zijn --> aantal elementen in array

// const eatAnimalMeat = animals.filter(animal => {
//     return animal.food === "meat" || animal.food === "insects"
// })
// const amountMeatEatingAnimals = eatAnimalMeat.length;
// console.log(amountMeatEatingAnimals)

const getAmountOfCarnivores = (animals) => {
  const carnivores = animals.filter((animal) => animal.food === "meat");
  return carnivores.length;
};

// console.log(getAmountOfCarnivores(animals));

//opdracht 2 Geef het continent vh dier terug dat het oudst wordt

//1: sorteer de dieren op volgorde van max_age --> array.sort
//2: pak het eerste dier uit array --> pak het eerste element uit een array
//3: geef continent --> lees een waarde van een object

//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const getContinentOfLongestLiving = (animals) => {
  animals.sort((a, b) => {
    if (a.max_age < b.max_age) {
      return 1;
    }
    if (a.max_age > b.max_age) {
      return -1;
    }
    return 0;
  });
  return animals[0].continent;   //eerste element uit array 
};

console.log(getContinentOfLongestLiving(animals)); //South_America --> tapir
