import React, { useState, useEffect } from 'react';
import OutputText from './OutputText';

const OutputArea = ({ displayMoney, addText, setDisplayMoney, countMoney, setCountMoney }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (displayMoney && addText) {
            // Append new transaction to the transactions array
            setTransactions(prevTransactions => [
                ...prevTransactions,
                { money: displayMoney, text: addText }
            ]);
            // Update countMoney based on the new displayMoney
            setCountMoney(prevCount => prevCount + displayMoney);
            // Reset displayMoney
            setDisplayMoney(0);
        }
    }, [displayMoney, addText, setCountMoney, setDisplayMoney]);




    const removeLine = (index) => {
        const money = transactions[index].money; // Access the money of the transaction to be removed
        setTransactions(prevTransactions => 
            prevTransactions.filter((_, i) => i !== index)
        );
        setCountMoney(prevCount => prevCount - money); // Update countMoney by subtracting the removed money
    };
    


    return (
    <OutputText transactions={transactions} removeLine={removeLine}/>
    );
};

export default OutputArea;
