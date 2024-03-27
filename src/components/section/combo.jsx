export default function Combo({deck, discard, anim}){
    return (
    <div className='combo'>
      <Card card={deck[0]} anim = {anim}/>
      <DiscardPile card={discard[0]} anim={anim}/>
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
        <div className={'cardFront ' + anim}>
            <div className = {'preview ' + abilityText}>
              {abilityText.replace('_', ' ')}
            </div>
            <h1 className='number'>{numText}</h1>
        </div>
  )
  }
  
  function DiscardPile({card, anim}){
    let abilityText = "";
    if (card){
      abilityText = card.ability;
    }
    return (
    <div className={anim + ' cardBack'} >
        <h1 className={'ability ' + abilityText} >{abilityText.replace('_', ' ')}</h1>
    </div>
  
  )
  }
  

  