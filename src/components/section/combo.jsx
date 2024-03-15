export default function Combo({deck, discard}){
    return (
    <div className='combo'>
    <Card card={deck[0]}/>
    <Cardback card={discard[0]}/>
    </div>
  )
  }


  function Card({card}){
    let abilityText = "";
    let numText = "";
    if (card){
      abilityText = card.ability;
      numText = card.number;
    }
    return (
    <div className='cardFront'>
        <div className = {'preview ' + abilityText}>
        {abilityText.replace('_', ' ')}
        </div>
        <h1 className='number'>{numText}</h1>
    </div>
  
  )
  }
  
  function Cardback({card}){
    let abilityText = "";
    if (card){
      abilityText = card.ability;
    }
    return (
    <div className='cardBack'>
        <h1 className={'ability ' + abilityText} >{abilityText.replace('_', ' ')}</h1>
    </div>
  
  )
  }
  

  