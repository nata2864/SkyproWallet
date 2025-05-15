import { useCallback, useState, useEffect } from "react";
import { fetchExpenses, postExpense,patchExpense } from "../services/api";
import { toast } from "react-toastify";
import { textErrors } from "../const";
import { ExpenseContext } from "./ExpenseContext";

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

  const getExpenses = useCallback(async () => {
    try {
      const data = await fetchExpenses({ token });
      if (data) setExpenses(data);
    } catch (error) {
      setError(error.message);
    }
  }, [token]);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const addNewExpense = async ({ expense }) => {
    try {
      await postExpense({ token, expense });
      await getExpenses();
    } catch (error) {
      console.error(textErrors.addExpenseError, error);
      toast.error(textErrors.addExpenseError);
    }
  };

  const editExpense = async ({ expense, id }) => {
    try {
      const newExpenses = await patchExpense({ token: token, id, expense });
      setExpenses(newExpenses);
    } catch (error) {
      toast.error(textErrors.updateExpenseError);
      console.error(textErrors.updateExpenseError, error);
    }
  };

  return (
    <ExpenseContext.Provider value={{ expenses, error, addNewExpense,editExpense  }}>
      {children}
    </ExpenseContext.Provider>
  );
};

