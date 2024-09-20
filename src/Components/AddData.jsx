import React, { useState } from 'react';

const AddData = ({ displayMoney, setDisplayMoney, addText, setAddText }) => {
  const [addMoney, setAddMoney] = useState('');
  const [displayText, setDisplayText] = useState('');

  function InputChangeMoney(e) {
    setAddMoney(e.target.value);
  }

  function InputChangeText(e) {
    setDisplayText(e.target.value);
  }

  function addTransaction() {
    // Convert addMoney to a number and update displayMoney correctly
    setDisplayMoney(prevMoney => prevMoney + Number(addMoney));
    setAddText(displayText); // Set the text correctly
    setAddMoney(''); 
    setDisplayText(''); // Clear displayText after setting
  }

  return (
    <>
      <div className="btn-input-container">
        <input
          type="text"
          placeholder='Enter Money'
          value={addMoney}
          onChange={InputChangeMoney}
        />
        <input
          type="text"
          placeholder='Enter text'
          value={displayText} // Change this to displayText
          onChange={InputChangeText}
        />
        <button onClick={addTransaction}>Add Transaction</button>
        <button onClick={()=>window.location.reload()}>Rescedule</button>
      </div>
    </>
  );
}

export default AddData;
