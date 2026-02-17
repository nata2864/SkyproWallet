import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import { useParams } from 'react-router-dom';

function ExpensePage() {
  const { id } = useParams();
  //ДОБАВЛЕНО ДЛЯ ОПРЕДЕЛЕНИЯ ID в ExpenseForm при редактировании.
  return (
    <>
      <ExpenseForm selectedExpense={id} />
    </>
  );
}

export default ExpensePage;
