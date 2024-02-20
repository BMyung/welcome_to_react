import {useState} from 'react';
import './App.css';
// import Combo from './components/section/combo'
// import Goal from './components/section/goals'
import Menu from './components/section/menu'
import cover from './cover.jpg';
import './App.css'


const startDeck = [
  {number: 1,
  ability: 'park'},
  {number: 2,
  ability: 'park'},
  {number: 4,
  ability: 'park'},
  {number: 5,
  ability: 'park'},
  {number: 5,
  ability: 'park'},
  {number: 6,
  ability: 'park'},
  {number: 7,
  ability: 'park'},
  {number: 7,
  ability: 'park'},
  {number: 8,
  ability: 'park'},
  {number: 8,
  ability: 'park'},
  {number: 9,
  ability: 'park'},
  {number: 9,
  ability: 'park'},
  {number: 10,
  ability: 'park'},
  {number: 11,
  ability: 'park'},
  {number: 11,
  ability: 'park'},
  {number: 12,
  ability: 'park'},
  {number: 14,
  ability: 'park'},
  {number: 15,
  ability: 'park'},
  {number: 1,
  ability: 'stock_exchange'},
  {number: 2,
  ability: 'stock_exchange'},
  {number: 4,
  ability: 'stock_exchange'},
  {number: 5,
  ability: 'stock_exchange'},
  {number: 5,
  ability: 'stock_exchange'},
  {number: 6,
  ability: 'stock_exchange'},
  {number: 7,
  ability: 'stock_exchange'},
  {number: 7,
  ability: 'stock_exchange'},
  {number: 8,
  ability: 'stock_exchange'},
  {number: 8,
  ability: 'stock_exchange'},
  {number: 9,
  ability: 'stock_exchange'},
  {number: 9,
  ability: 'stock_exchange'},
  {number: 10,
  ability: 'stock_exchange'},
  {number: 11,
  ability: 'stock_exchange'},
  {number: 11,
  ability: 'stock_exchange'},
  {number: 12,
  ability: 'stock_exchange'},
  {number: 14,
  ability: 'stock_exchange'},
  {number: 15,
  ability: 'stock_exchange'},
  {number: 1,
  ability: 'fence'},
  {number: 2,
  ability: 'fence'},
  {number: 3,
  ability: 'fence'},
  {number: 5,
  ability: 'fence'},
  {number: 5,
  ability: 'fence'},
  {number: 6,
  ability: 'fence'},
  {number: 6,
  ability: 'fence'},
  {number: 7,
  ability: 'fence'},
  {number: 8,
  ability: 'fence'},
  {number: 8,
  ability: 'fence'},
  {number: 9,
  ability: 'fence'},
  {number: 10,
  ability: 'fence'},
  {number: 10,
  ability: 'fence'},
  {number: 11,
  ability: 'fence'},
  {number: 11,
  ability: 'fence'},
  {number: 13,
  ability: 'fence'},
  {number: 14,
  ability: 'fence'},
  {number: 15,
  ability: 'fence'},
  {number: 3,
  ability: 'pool'},
  {number: 4,
  ability: 'pool'},
  {number: 6,
  ability: 'pool'},
  {number: 7,
  ability: 'pool'},
  {number: 8,
  ability: 'pool'},
  {number: 9,
  ability: 'pool'},
  {number: 10,
  ability: 'pool'},
  {number: 12,
  ability: 'pool'},
  {number: 13,
  ability: 'pool'},
  {number: 3,
  ability: 'biz'},
  {number: 4,
  ability: 'biz'},
  {number: 6,
  ability: 'biz'},
  {number: 7,
  ability: 'biz'},
  {number: 8,
  ability: 'biz'},
  {number: 9,
  ability: 'biz'},
  {number: 10,
  ability: 'biz'},
  {number: 12,
  ability: 'biz'},
  {number: 13,
  ability: 'biz'},
  {number: 3,
  ability: 'temp_agency'},
  {number: 4,
  ability: 'temp_agency'},
  {number: 6,
  ability: 'temp_agency'},
  {number: 7,
  ability: 'temp_agency'},
  {number: 8,
  ability: 'temp_agency'},
  {number: 9,
  ability: 'temp_agency'},
  {number: 10,
  ability: 'temp_agency'},
  {number: 12,
  ability: 'temp_agency'},
  {number: 13,
  ability: 'temp_agency'}

]

const goalList = [[
  {level: 1,
  goal: '[#] [#] [#] [#] [#] [#]',
  description: 'Six [1]s',
  first_points: 8,
  second_points: 4},
  {level: 1,
  goal: '[##] [##] [##] [##]',
  description: 'Four [2]s',
  first_points: 8,
  second_points: 4},
  {level: 1,
  goal: '[###] [###] [###]',
  description: 'Three [3]s',
  first_points: 8,
  second_points: 4},
  {level: 1,
  goal: '[####] [####] [####] [####]',
  description: 'Four [4]s',
  first_points: 6,
  second_points: 3},
  {level: 1,
  goal: '[######] [######]',
  description: 'Two [6]s',
  first_points: 10,
  second_points: 6},
  {level: 1,
  goal: '[#####] [#####]',
  description: 'Two [5]s',
  first_points: 8,
  second_points: 4}],
  [
  {level: 2,
  goal: '[#####] [##] [##]',
  description: 'One [5] Two [2]s',
  first_points: 10,
  second_points: 6},
  {level: 2,
  goal: '[###] [###] [####]',
  description: 'Two [3]s One [4]',
  first_points: 12,
  second_points: 7},
  {level: 2,
  goal: '[######] [#] [#] [#]',
  description: 'One [6] Three [1]s',
  first_points: 11,
  second_points: 6},
  {level: 2,
  goal: '[###] [######]',
  description: 'One [3] One [6]',
  first_points: 8,
  second_points: 4},
  {level: 2,
  goal: '[####] [#] [#] [#]',
  description: 'One [4] Three [1]s',
  first_points: 9,
  second_points: 5},
  {level: 2,
  goal: '[#####] [####]',
  description: 'One [5] One [4]',
  first_points: 9,
  second_points: 5},
],
[
  {level: 3,
  goal: '[##] [###] [#####]',
  description: 'One [2] One [3] One [5]',
  first_points: 13,
  second_points: 7},
  {level: 3,
  goal: '[#] [##] [######]',
  description: 'One [1] One [2] One [6]',
  first_points: 12,
  second_points: 7},
  {level: 3,
  goal: '[##] [#####]',
  description: 'One [2] One [5]',
  first_points: 7,
  second_points: 3},
  {level: 3,
  goal: '[#] [##] [##] [###]',
  description: 'One [1] Two [2] One [3]',
  first_points: 11,
  second_points: 6},
  {level: 3,
  goal: '[#] [####] [#####]',
  description: 'One [1] One [4] One [5]',
  first_points: 13,
  second_points: 7},
  {level: 3,
  goal: '[###] [####]',
  description: 'One [3] One [4]',
  first_points: 7,
  second_points: 3},
]
]

let gameDeck = JSON.parse(JSON.stringify(startDeck));

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
      {abilityText}
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
      <h1 className={'ability ' + abilityText} >{abilityText}</h1>
  </div>

)
}

function Combo({deck}){
  return (
  <div className='combo'>
  <Card card={deck.topStacks[0]}/>
  <Cardback card={deck.discardStacks[0]}/>
  </div>
)
}

  // const [count, setCount] = useState(0)
  // const [gameStatus, setStatus] = useState(false);
  const [stacks, setStacks] = useState([ 
    {
      topStacks:[], discardStacks:[]
    },
    {
      topStacks:[], discardStacks:[]
    },{
      topStacks:[], discardStacks:[]
    }]);
  const [remaining, setRemaining] = useState(null);
  const [goals, setGoals] = useState([{
    level: '', goal: '', description: '', first_points: '', second_points: ''
  },{
    level: '', goal: '', description: '', first_points: '', second_points: ''
  },{
    level: '', goal: '', description: '', first_points: '', second_points: ''
  }])
  

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

  function nextCard(){
    let gameStacks = [...stacks]
    console.log(gameStacks)
    for (let i =0; i < 3; i++){
      let mainstack = [gameStacks[i].topStacks];
      let discards = [gameStacks[i].discardStacks];
      discards.unshift(mainstack.shift());
      gameStacks[i].topStacks = mainstack;
      gameStacks[i].discardStacks = discards;
    }
    console.log(gameStacks)
    setStacks(gameStacks);
  }
  
  function deal(){
    let gameStacks = [ 
      {
        topStacks:[], discardStacks:[]
      },
      {
        topStacks:[], discardStacks:[]
      },{
        topStacks:[], discardStacks:[]
      }];
    gameDeck = JSON.parse(JSON.stringify(startDeck));
    shuffle(gameDeck)
    while(gameDeck.length > 0){
        for (let j = 0; j < gameStacks.length; j++){
            gameStacks[j].topStacks.push(gameDeck.shift());
        }
    }
    setStacks(gameStacks)

    }

    function newGame(){
      newGoals()
      console.log(gameDeck)
      deal();
      // nextCard();
      // setStatus(true)
      // setRemaining(stacks[0].topStacks.length);
    }

    function reshuffle(){
      // Reshuffle when stacks are low. Change to auto when next card is not available.
          //   let allStacks = [
          //       {topStacks: stacks[0][stacks[0].length-1],
          //           discardStacks: discards[0][discards[0].length-1]},
          //       {topStacks: stacks[1][stacks[0].length-1],
          //           discardStacks: discards[1][discards[0].length-1]},
          //       {topStacks: stacks[2][stacks[0].length-1],
          //           discardStacks: discards[2][discards[0].length-1]}];
          //   let remaining = stacks[0].length;
          //   setStacks(allStacks);
          // setRemaining(data.remaining);
          // alert('reshuffle')
          // console.log(stacks)
    }

    
  
  function nextMove(){
    nextCard();
    //       let allStacks = [
    //           {topStacks: stacks[0][stacks[0].length-1],
    //               discardStacks: discards[0][discards[0].length-1]},
    //           {topStacks: stacks[1][stacks[0].length-1],
    //               discardStacks: discards[1][discards[0].length-1]},
    //           {topStacks: stacks[2][stacks[0].length-1],
    //               discardStacks: discards[2][discards[0].length-1]}];
    //       let remaining = stacks[0].length;
    //       setStacks(allStacks);
             setRemaining(stacks[0].topStacks.length);
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
      {stacks.map((data,i)=>{
        return (<Combo deck={data} key={i}/>)
      })}
    </div>
    <div className = 'menuWrapper'>
    <img className = 'image' src={cover} alt='game cover'></img>
      <h2>Cards remaining: {remaining}</h2>
      <Menu newGame={newGame} shuffle={reshuffle} next={nextMove}/>
    </div>
    </div>

    </>
  )
}

export default App
