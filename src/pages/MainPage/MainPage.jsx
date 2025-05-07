import Main from "../../components/Main/Main";
import { useCallback } from "react";
import { useEffect } from "react";
import { fetchExpenses, postExpense } from "../../services/api";
import { useState } from "react";

function MainPage() {

  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState('');

  const getExpenses = useCallback(async () => {
    try {
    
       const data = await fetchExpenses({
          // пока у нас не реализована авторизация, передаём токен вручную
          token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
       });
       if (data) setExpenses(data);
    } catch (error) {
       setError(error.message);
    } 
    // finally {
    //    setLoading(false);
    // }
 }, []);
 useEffect(() => {
    getExpenses();
 }, [getExpenses]);

 const addNewExpense = async ({ expense }) => {
  try {
    const newExpense = await postExpense({  token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck', expense });
    setExpenses(newExpense);
    // const normalized = {
    //   ...newExpense,
    //   date: new Date(newExpense.date).toISOString(),
    // };

    // setExpenses(prev => [...prev, normalized]);
  } catch (error) {
    // toast.error(textValidationErrors.addNewTaskError);
    console.error("Ошибка добавления расхода", error);
  }
};

  return (
    <div>
      <Main expenses={expenses} error= {error}  onAddExpense={addNewExpense} />
    </div>
  );
}

export default MainPage;
