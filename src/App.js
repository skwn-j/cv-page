import React from 'react';
import './App.css';

const brushcoco = './brushcoco.jpg';
const normalcoco = './normalcoco.jpg';

let targetcoco = normalcoco;

const handleClick = () => {
  if(targetcoco === brushcoco) targetcoco = normalcoco;
  else targetcoco = brushcoco;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={targetcoco} className="coco" alt="coco" width={300} height={300} onClick={handleClick}/>
      </header>
      <div>
        
      </div>
    </div>
  );
}

export default App;
