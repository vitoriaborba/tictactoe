import React, {useState, useEffect} from 'react';
import './Board.css'
import Square from './Square';
import { Patterns } from '../patterns';

function Board() {
const [board, setBoard] = useState(["","","","","","","","",""]);
const [player, setPlayer] = useState("O");
const [result, setResult] = useState({winner:'none', state: 'none'})

useEffect(()=> {
  checkWin();
  checkIfTie();

  if (player === 'X') {
    setPlayer('O')
  } else {
    setPlayer('X')
  }
},[board]);

useEffect(()=> {
  if (result.state !== 'none') {
    alert(`Game Finished! Winning Player: ${result.winner}`);
    restartGame();
  }
}, [result])
//Here we can choose a square
const selected = (square) => {
    setBoard(
     board.map((val, idx) => {
        if (idx === square && val === '') {
            return player;
        }
        return val;
      })
    );
};

const checkWin = () => {

  Patterns.forEach((currentPattern) => {
    const fisrtPlayer = board[currentPattern[0]];
    if (fisrtPlayer ==='') return;
    let foundWinningPattern = true;
    currentPattern.forEach((idx)=>{
      if (board[idx] !== fisrtPlayer) {
        foundWinningPattern = false
      }
    })
    if (foundWinningPattern) {
      setResult({winner:player, state:'Won'})
    }
  })
}

const checkIfTie = () => {
  let filled = true;
  board.forEach((square) => {
    if (square === '') {
      filled = false
    }
  })
  if (filled) {
    setResult({ winner: 'No One', state: 'Tie'});
  }
}

const restartGame = () => {
  setBoard(["","","","","","","","",""]);
  setPlayer('O');
}
  return (
    <div className='board'>
        <div className='row'>
        <Square 
        value={board[0]} 
        selected={()=> {
            selected(0);
          }} 
        />
         <Square 
        value={board[1]} 
        selected={()=> {
            selected(1);
          }} 
        />
         <Square 
        value={board[2]} 
        selected={()=> {
            selected(2);
          }} 
        />      
        </div>
        <div className='row'>
        <Square 
        value={board[3]} 
        selected={()=> {
            selected(3);
          }} 
        />
         <Square 
        value={board[4]} 
        selected={()=> {
            selected(4);
          }} 
        />
         <Square 
        value={board[5]} 
        selected={()=> {
            selected(5);
          }} 
        />      
        </div>
        <div className='row'>
        <Square 
        value={board[6]} 
        selected={()=> {
            selected(6);
          }} 
        />
         <Square 
        value={board[7]} 
        selected={()=> {
            selected(7);
          }} 
        />
         <Square 
        value={board[8]} 
        selected={()=> {
            selected(8);
          }} 
        />      
        </div>
    </div>
  )
}

export default Board