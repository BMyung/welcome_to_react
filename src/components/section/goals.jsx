import Goalpoints from "./goalpoints"

export default function Goal({goalCard}){
            return (
                <div className='goalCard'>
                    <h2>Level {goalCard.level}</h2>
                
                        <div className='goalDetail'>
                            <h1>{goalCard.goal}</h1>
                            <h3>{goalCard.description}</h3>
                        </div>
                            <Goalpoints points = {goalCard}/>
                </div>
    
            )
    }
    