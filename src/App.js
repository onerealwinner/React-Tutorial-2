import "./App.css";

import { useState } from "react";
import AnimalShow from "./AnimalShow";


function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'gator', 'horse', 'dog'];
    return animals[Math.floor(Math.random()*animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = (e) => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, i) => {
        return <AnimalShow animalType={animal} key={i} indexOf={i} />;
    })

    return (
        <div className="app">
            <button onClick={handleClick}>Animals</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}

export default App;