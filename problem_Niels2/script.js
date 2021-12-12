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
  {
    name: "house cat",
    food: "meat",
    weight: 20,
    max_age: 15,
    continent: "europe",
    flies: false,
    nocturnal: false,
  },
];

//opdracht 1: list of the animals, sorted by name
// 1 sorteren op namen van de dieren
// - array methods: sort
// - functie
// - read an object's attribute
// 2 vind van een dier de naam
// - read an object's attribute

const getSortedListOfAnimals = animals => {
    const animalSortedByName = animals.sort(
        (animal1, animal2) => animal1.name > animal2.name ? 1 : -1
    );
    return animalSortedByName.map(animal => animal.name)
  }
console.log(getSortedListOfAnimals(animals))
//['bat','cow','house cat','lion','moes','monkey','rhino','tapir']

//kan ook op kortere manier:
// 1 vind van een dier de naam
// - read an object's attribute
// 2 sorteren op namen van de dieren
// - array methods: sort
// - functie
// - read an object's attribute

const getSortedListOfAnimals2 = (animals) => {
  const sortedAnimalNames = animals.map((animal) => animal.name).sort();

  return sortedAnimalNames;
};
//korter
const getSortedListOfAnimals2 = (animals) => animals.map((animal) => animal.name).sort();

console.log(getSortedListOfAnimals2(animals));

//werkt met sort() maar als een dier met een hoofdletter is, staat die automatisch boven aan de lijst. LET OP dus!!
