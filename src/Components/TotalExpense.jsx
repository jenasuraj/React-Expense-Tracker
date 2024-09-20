import React from 'react'

const TotalExpense = ({displayMoney,countMoney}) => {
  return (
   <>
   <div className='Total-expense-text'>
    <h3>Total Expense is : <span>{countMoney}</span>₹</h3>
   </div>
   </>
  )
}

export default TotalExpense
