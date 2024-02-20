
export default function Card(card){
        return (
        <div className='cardFront'>
            <div className = {'preview ' + card.ability}>
            {card.ability}
            </div>
            <h1 className='number'>{card.number}</h1>
        </div>

    )
}
