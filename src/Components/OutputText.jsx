import React from 'react'

const OutputText = ({transactions,removeLine}) => {
  return (
    <>
    <div className='History'>
        <p className='history'>History</p>
        <div>
            {transactions.map((transaction, index) => (
                <p className="finalP" key={index}>
                    {transaction.text} <span className="money">{transaction.money}</span>
                    <button onClick={() => removeLine(index)}>Delete</button>
                </p>
            ))}
        </div>
    </div>
</>
  )
}

export default OutputText
