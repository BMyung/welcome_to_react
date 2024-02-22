
// import Card from '../card/card'
// import Cardback from '../card/cardback'

export default function Combo(deck, discard){
        // console.log(topCard);
        return (
        <div className='combo'>
        <div className='cardFront'>
            <div className = {'preview ' + topCard.ability}>
            {topCard.ability}
            </div>
            <h1 className='number'>{topCard.number}</h1>
        </div>
        <div className='cardBack'>
            <h1 className={'ability ' + topDiscard.ability} >{topDiscard.ability}</h1>
        </div>
        </div>

    )
}