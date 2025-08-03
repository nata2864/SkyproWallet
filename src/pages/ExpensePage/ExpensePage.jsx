import ExpenseForm from '../../components/ExpenseForm/ExpenseForm ';
import styled from 'styled-components';

const FormWrapper = styled.div`
  padding: 24px 16px;
`;

function ExpensePage() {
  return (
    <FormWrapper>
      <ExpenseForm />
    </FormWrapper>
  );
}

export default ExpensePage;