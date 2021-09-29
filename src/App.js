import './App.css';
//import {NUMBER_DATA} from "./data/data";
//import Numbers from  "./components/Numbers";
import {CAR_DATA} from "./data/data";
import Cars from  "./components/Cars";
import {PERSON_DATA} from "./data/data";
import Persons from "./components/Persons";
import Numbers from "./components/Numbers";
import Cities from "./components/Cities";

function App() {
  const personAges = PERSON_DATA.map(p => p.age);
  const sortedPersonAgesWithDoubles = [...personAges].sort((a, b) => (a > b) ? 1 : -1);
  const sortedPersonAges = removeDuplicates(sortedPersonAgesWithDoubles);
  const citiesWithDoubles = PERSON_DATA.map(p => p.city);
  const cities = removeDuplicates(citiesWithDoubles);
  const citiesWithNumberOfPersons = cities.map(city =>
      ({name: city, numberOfPersons: countOccurrences(citiesWithDoubles, city)})
    );
  return (
    <div className="App">
      <Persons title="Persons" persons={PERSON_DATA}/>
      <Numbers title="Leeftijden" numbers={personAges}></Numbers>
      <Numbers title="Gesorteerde Leeftijden" numbers={sortedPersonAges}></Numbers>
      <Cities title="Steden" cities={citiesWithNumberOfPersons} />
      <Cars title="Auto's" cars={CAR_DATA} />
    </div>
  );
}
//<Numbers title="Numbers" numbers={NUMBER_DATA}></Numbers>

function removeDuplicates(array) {
    let x = {};
    array.forEach(function(i) {
        if(!x[i]) {
            x[i] = true
        }
    })
    return Object.keys(x)
};

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export default App;
