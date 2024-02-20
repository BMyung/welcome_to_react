import { useEffect, useState } from "react";

function Goalpoints({goalCard}){
    const [color, setColor] = useState('white');
    const [active, setActive] = useState(true)
    let scoreCard = () => {
        active ? setColor('rgb(59,59,59)') : setColor('white');
        setActive(!active );
    }
    let first, second = '';
    if (goalCard){
        first = goalCard.first_points;
        second = goalCard.second_points
    }
    return (
        <div className='points'>
            <h2 style={{backgroundColor: color}} className='goalPoint1' onClick={scoreCard}>First: {first}</h2>
            <h2 className='goalPoint2'>Rest: {second}</h2>
        </div>

    )
}


export default function Goal(goalCard){
        return (
            <div className='goalCard'>
                <h2> Level {goalCard.level}</h2>
                    <div className='goalDetail'>
                        <h1>{goalCard.goal}</h1>
                        <h3>{goalCard.description}</h3>
                    </div>
                        <Goalpoints points = {goalCard}/>
            </div>

        )
}
