import "./AnimalShow.css";

import { useState } from 'react';
import horse from './svg/horse.svg';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';


const svgMap = {
    bird,
    cat,
    horse,
    cow,
    dog,
    gator,
    heart
}

function AnimalShow({animalType}) {
    const [heartSize, setHeartSize] = useState(0);

    const handleHeartGrowClick = () => {
        setHeartSize(heartSize > 9 ? 0 : heartSize + 1 );
    };

    return ( 
        <div className="animal-show" onClick={handleHeartGrowClick}>
            <img className="animal" src={svgMap[animalType]} alt="{animalType}"  title={animalType} />
            <img className="heart" src={heart} alt="heart" style={{width: 10 + 10 * heartSize + 'px'}} />
       </div>
    )
}

export default AnimalShow;