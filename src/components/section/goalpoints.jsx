import { useState } from "react";

export default function Goalpoints({points}){
// //     // let scoreCard = () => {
// //     //     active ? this.setState({color: 'rgb(59,59,59)'}) : this.setState({color: ''});
// //     //     this.setState({ active: !active });
// //     // }
// //     return (
// //         <div className='points'>
// //             {/* <h2 style={{backgroundColor: color}} className='goalPoint1' onClick={scoreCard}>First:</h2> */}
// //             <h2 style={{backgroundColor: color}} className='goalPoint1'>First:</h2>
// //             <h2 className='goalPoint2'>Rest: </h2>
// //         </div>

// //     )
// // }

//   function Goalpoints({points}){
    const [color, setColor] = useState('white');
    const [active, setActive] = useState(true)
    let scoreCard = () => {
        active ? setColor('rgb(59,59,59)') : setColor('white');
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