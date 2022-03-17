import { useState } from 'react';

import './ExpensesDisplay.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function ExpensesDisplay(props){
    const [enteredYear, setEnteredYear] = useState('2020');
    const filterChangeHandler = (year) =>{
      setEnteredYear(year)
    }
    const filterByYear = (obj) => {
      return obj.date.getFullYear().toString() === enteredYear
    }

    const filteredExpenses = props.data.filter(filterByYear);

    let expensesContent = <p>No expenses found</p>;

    if(filteredExpenses.length){
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          price={expense.price}
          date={expense.date}/>
      ))}

    return(
      <div>
    <Card className='expenses'>
      <ExpensesFilter selectedYear={enteredYear} onChangeFilter={filterChangeHandler}/>
      {expensesContent}
    </Card>
    </div>
    )
}

export default ExpensesDisplay;