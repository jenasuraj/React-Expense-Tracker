import logo from './logo.svg';
import './App.css';
import AddData from './Components/AddData';
import TotalExpense from './Components/TotalExpense';
import OutputArea from './Components/OutputArea';
import { useState } from 'react';
function App() {
  const [displayMoney, setDisplayMoney] = useState(0); 
  const [addText, setAddText] = useState('');
  const [countMoney,setCountMoney] = useState(0);
  return (
    <>
    <div className="container">
      <AddData displayMoney={displayMoney} setDisplayMoney={setDisplayMoney}   
      addText={addText} setAddText ={setAddText}/>

      <TotalExpense displayMoney = {displayMoney}  countMoney={countMoney}/>
      <OutputArea displayMoney = {displayMoney} 
      setDisplayMoney={setDisplayMoney} 
        addText={addText}
        countMoney={countMoney}
        setCountMoney={setCountMoney}
        
        />
    </div>
    </>
  );
  
}

export default App;
