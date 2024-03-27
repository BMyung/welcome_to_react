import {useState} from 'react';
import './App.css';
import Combo from './components/section/combo'
import Goal from './components/section/goals'
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
  const [animation, setAnimation] = useState('')
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
      newGoals();
      deal();
      setStatus(true);
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
    setAnimation('flip')
    setTimeout(()=>{
      setAnimation('')
    }, 550)
    setTimeout(()=> {
      if (remaining <= 4){
        reshuffle()
      }
        setGameStacks(gs => [gs[0].slice(1), gs[1].slice(1), gs[2].slice(1)])
        setDiscardStack(ds =>[
          [...gameStacks[0].slice(0,1), ...ds[0]],
          [...gameStacks[1].slice(0,1), ...ds[1]],
          [...gameStacks[2].slice(0,1), ...ds[2]]
        ])
     , setRemaining(n => n-1);
    }, 200
    )
  }
  
  return (
    <>
     <h1>Welcome to Your Perfect Home</h1>
    <div className='wrapper'>
    <div className = 'goals'>
      {goals.map((data,i)=>{
        return (<Goal goalCard = {data} key={i}/>)
      })}
    </div>
    <div className='cardArea'>
      {gameStacks.map((data,i)=>{
        return (<Combo deck={data} discard={discardStack[i]} key={i}/>)
      })}
    </div>
    <div className = 'menuWrapper'>
    <img className = 'image' src={cover} alt='game cover'></img>
      <h2>Cards remaining: {remaining}</h2>
      <Menu newGame={newGame} shuffle={reshuffle} next={nextCard} active={gameStatus}/>
    </div>
    </div>

    </>
  )
}

export default App
