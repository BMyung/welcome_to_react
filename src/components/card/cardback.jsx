export default function Cardback(card){
        return (
        <div className='cardBack'>
            <h1 className={'ability ' + card.ability} >{card.ability}</h1>
        </div>

    )
}
