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

//opdracht 2: check if the two lightest living animals are from the same continent
//1: sorteer alle dieren op gewicht
// - array.sort
// - compareFunction --> groter dan, kleiner dan etc
//2: pak de eerste 2 van de lijst
// - neem een element van een array (0,1)
//3: vergelijk if die 2 van hetzelfde continent komen
// - pak het continent van een dier
//     - array.map continent
//- zijn de continenten hetzelfden hetzelfde
//     - zelfde waarde?

const areThe2LightestAnimalsFromSameContinent = (animals) => {
  const sortedByWeight = animals.sort((animal1, animal2) =>
    animal1.weight > animal2.weight ? 1 : -1
  );
  const lightestAnimals = sortedByWeight.slice(0, 2);
  const continents = lightestAnimals.map((animal) => animal.continent);
  const continentsAreTheSame = continents[0] === continents[1];
  return continentsAreTheSame;
};
console.log(areThe2LightestAnimalsFromSameContinent(animals));

//korter:
// const areThe2LightestAnimalsFromSameContinent2 = (animals) => {
//   const sortedByWeight = animals.sort((animal1, animal2) =>
//     animal1.weight > animal2.weight ? 1 : -1
//   );
//   if (sortedByWeight[0].continent === sortedByWeight[1].continent) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(areThe2LightestAnimalsFromSameContinent2(animals));

//nog korter:
// const areThe2LightestAnimalsFromSameContinent2 = (animals) => {
//   const sortedByWeight = animals.sort((animal1, animal2) =>
//     animal1.weight > animal2.weight ? 1 : -1
//   );
//   return sortedByWeight[0].continent === sortedByWeight[1].continent
//     ? true
//     : false;
// };
// console.log(areThe2LightestAnimalsFromSameContinent2(animals));

//en ja nog korter
const areThe2LightestAnimalsFromSameContinent2 = (animals) => {
    const sortedByWeight = animals.sort((animal1, animal2) =>
      animal1.weight > animal2.weight ? 1 : -1
    );
    return sortedByWeight[0].continent === sortedByWeight[1].continent; //return altijd true of false bij if statement
  };
  console.log(areThe2LightestAnimalsFromSameContinent2(animals));
