import './ExpensesDisplay.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

function ExpensesDisplay(props){
    return(
    <Card className='expenses'>
      <ExpenseItem 
      title={props.data[0].title}
      price={props.data[0].price}
      date={props.data[0].date}
      />
      <ExpenseItem 
      title={props.data[1].title}
      price={props.data[1].price}
      date={props.data[1].date}
      />
      <ExpenseItem 
      title={props.data[2].title}
      price={props.data[2].price}
      date={props.data[2].date}
      />
    </Card>
    )
}

export default ExpensesDisplay;