import {useState} from 'react';

import ExpensesDisplay from './components/Expenses/ExpensesDisplay';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Car Insurance',
    price: Math.floor(Math.random() * 200),
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e2',
    title: 'Bills',
    price: Math.floor(Math.random() * 200),
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e3',
    title: 'Market',
    price: Math.floor(Math.random() * 200),
    date: new Date(2021, 2, 28)
  }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
     return [expense, ...prevExpenses];
    });
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpensesDisplay
      data={expenses}
      />
    </div>
  );
}

export default App;
