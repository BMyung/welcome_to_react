export default function Combo({deck, discard, anim}){
    return (
    <div className='combo'>
    <div className='cardFrontContainer'>
      <Card card={deck[0]} anim = {anim}/>
      <Card card={deck[1]}/>
    </div>
      <DiscardPile card={discard[0]}/>
    </div>
  )
  }


  function Card({card, anim}){
    let abilityText = "";
    let numText = "";
    if (card){
      abilityText = card.ability;
      numText = card.number;
    }
    return (
      <div className={"cardContainer " + anim}>
        <div className='cardFront'>
            <div className = {'preview ' + abilityText}>
              {abilityText.replace('_', ' ')}
            </div>
            <h1 className='number'>{numText}</h1>
        </div>
        <div className="backFlip">
          <h1 className={'ability ' + abilityText} >{abilityText.replace('_', ' ')}</h1>
      </div>
    </div>
  )
  }
  
  function DiscardPile({card}){
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
  

  