import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock:{
    name: "rock",
    img: "https://cdn.happeningnext.com/events1/banners/2c71ce27c339abdb6847ebb8f3863026d8b43110532192b74b44c96ae74142e4-rimg-w960-h800-gmir.jpg?v=1656321112",
  },
  scissor:{
    name: "scissor",
    img: "https://ciselier.com/cdn/shop/products/ES-ITAL-S02_AlpenPetiteStork_390x.jpg?v=1648823329",
  },
  paper:{
    name: "paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg",
  }
}

function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [comSelect,setComSelect] = useState(null);
  const [getResult,setGetResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let comChoice = randomChoice();
    setComSelect(comChoice);
    setGetResult(judgement(choice[userChoice],comChoice));
  }

  const randomChoice = () =>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let comChoiceItem = itemArray[randomItem];
    return choice[comChoiceItem];
  }

  const judgement = (user, computer) => {
    if(user.name === computer.name){
      return 'TIE'
    }else if(user.name === 'rock') return computer.name === 'scissor'?'WIN':'LOSE'
    else if(user.name === 'scissor') return computer.name === 'paper'?'WIN':'LOSE'
    else if(user.name === 'paper') return computer.name === 'rock'?'WIN':'LOSE'
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={getResult}/>
        <Box title="Computer" item={comSelect} result={getResult}/>
      </div>
      <div className='main'>
        <button onClick={()=>play("scissor")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
