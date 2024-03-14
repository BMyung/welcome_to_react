import {useState} from 'react';
import './App.css';
// import Combo from './components/section/combo'
// import Goal from './components/section/goals'
import Menu from './components/section/menu'
import cover from './cover.jpg';
import './App.css'
import { startDeck, goalList } from './data/deck';


  function shuffle(deck){ 
    var m = deck.length, t, i;
    while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
    }
    return deck;
    }



function App() {

  function Goalpoints({points}){
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


function Goal({goalCard}){
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

function log(){
  console.log(gameStacks, discardStack)
}

function Combo({deck, discard}){
  return (
  <div className='combo'>
  <Card card={deck[0]}/>
  <Cardback card={discard[0]}/>
  </div>
)
}

  // const [count, setCount] = useState(0)
  const [gameStatus, setStatus] = useState(false);
  const [gameStacks, setGameStacks] = useState([[],[],[]]);
  const [discardStack, setDiscardStack] = useState([[],[],[]])
  const [remaining, setRemaining] = useState(null);
  const [goals, setGoals] = useState([
    {
    level: '', goal: '', description: '', first_points: '', second_points: ''
  },
  {
    level: '', goal: '', description: '', first_points: '', second_points: ''
  },
  {
    level: '', goal: '', description: '', first_points: '', second_points: ''
  }
])
  

  function newGoals(){
    let arr = [];
    let goalsCopy = JSON.parse(JSON.stringify(goalList));
    for (let i = 0; i < goalList.length; i++){
      shuffle(goalsCopy[i]);
      let card = goalsCopy[i].pop();
      arr.push(card);
    }
      setGoals(arr)
  }


  function deal(){
    let topStacks = [[],[],[]];
    let discards = [[],[],[]];
    let gameDeck = [...startDeck];
    shuffle(gameDeck)
    for (let i = 0; i < 3; i++){
      discards[i].push(gameDeck.shift())
    }
    while(gameDeck.length > 0){
        for (let j = 0; j < gameStacks.length; j++){
            topStacks[j].push(gameDeck.shift());
        }
    }
    setGameStacks(topStacks);
    setDiscardStack(discards);
    setRemaining(topStacks[0].length);
    }

    function newGame(){
      newGoals()
      deal();
      setStatus(true)
    }

    function reshuffle(){
        //   // Reshuffle when stacks are low. Change to auto when next card is not available.
              let discardPile = [...discardStack[0].slice(1), ...discardStack[1].slice(1), ...discardStack[2].slice(1)];
              shuffle(discardPile);
    
    let addTop = [[],[],[]]
              while(discardPile.length > 0){
                for (let j = 0; j < 3; j++){
                  addTop[j].push(discardPile.pop())
                }
            }
            setGameStacks(gs =>
              [
              [...gs[0], ...addTop[0]],
              [...gs[1], ...addTop[1]],
              [...gs[2], ...addTop[2]]
            ],
              );
            setDiscardStack(ds => [ds[0].slice(0,1), ds[1].slice(0,1), ds[2].slice(0,1)]);
            setRemaining(26);
    }

  function nextCard(){
      if (remaining <= 4){
        reshuffle()
      }
        setGameStacks(gs => [gs[0].slice(1), gs[1].slice(1), gs[2].slice(1)])
        setDiscardStack(ds =>[
          [...gameStacks[0].slice(0,1), ...ds[0]],
          [...gameStacks[1].slice(0,1), ...ds[1]],
          [...gameStacks[2].slice(0,1), ...ds[2]]
        ])
      setRemaining(n => n-1);
  }
  
  return (
    <>
     <h1>Welcome to Your Perfect Home</h1>
    <div className='wrapper'>
    <div className = 'goals'>
      <Goal goalCard = {goals[0]}/>
      <Goal goalCard = {goals[1]}/>
      <Goal goalCard = {goals[2]}/>
    </div>
    <div className='cardArea'>
      {/* {topStacks.map((data,i)=>{
        return (<Combo deck={data} key={i}/>)
      })} */}
        <Combo deck={gameStacks[0]} discard={discardStack[0]}/>
        <Combo deck={gameStacks[1]} discard={discardStack[1]}/>
        <Combo deck={gameStacks[2]} discard={discardStack[2]}/>
    </div>
    <div className = 'menuWrapper'>
    <img className = 'image' src={cover} alt='game cover' onClick={log}></img>
      <h2>Cards remaining: {remaining}</h2>
      <Menu newGame={newGame} shuffle={reshuffle} next={nextCard} active={gameStatus}/>
    </div>
    </div>

    </>
  )
}

export default App
