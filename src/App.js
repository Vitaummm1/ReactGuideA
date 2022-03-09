import ExpensesDisplay from './components/Expenses/ExpensesDisplay';

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensesDisplay
      data={expenses}
      />
    </div>
  );
}

export default App;
