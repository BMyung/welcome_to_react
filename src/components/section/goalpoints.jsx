import { useState } from "react";

export default function Goalpoints({points}){
    const [color, setColor] = useState('goldenrod');
    const [active, setActive] = useState(true)
    let scoreCard = () => {
        active ? setColor('rgb(109,109,109)') : setColor('goldenrod');
        setActive(!active );
    }
    let first, second = '';
    if (points){
        first = points.first_points;
        second = points.second_points
    }
    return (
        <div className='points'>
            <h2 style={{backgroundColor: color}} className='goalPoint1' onClick={scoreCard}>First: {first}</h2>
            <h2 className='goalPoint2'>Rest: {second}</h2>
        </div>

    )
}