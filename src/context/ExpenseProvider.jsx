import { useCallback, useState, useEffect } from "react";
import { fetchExpenses, postExpense, patchExpense } from "../services/api";
import { toast } from "react-toastify";
import { textErrors } from "../const";
import { ExpenseContext } from "./ExpenseContext";

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [token] = useState(
    "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck"
  );

  const getExpenses = useCallback(
    async (params = {}) => {
      setIsLoading(true);
      try {
        const data = await fetchExpenses({ token, ...params });
        setExpenses(data);
        setError(null);
        return data;
      } catch (error) {
        setError(error.message);
        toast.error(textErrors.fetchExpensesError);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [token]
  );
  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const addNewExpense = async (expense) => {
    try {
      await postExpense({ token, expense });
      await getExpenses();
      toast.success("Расход успешно добавлен");
    } catch (error) {
      console.error(textErrors.addExpenseError, error);
      toast.error(textErrors.addExpenseError);
      throw error;
    }
  };

  const editExpense = async (id, expense) => {
    try {
      await patchExpense({ token, id, expense });
      await getExpenses();
      toast.success("Расход успешно обновлен");
    } catch (error) {
      toast.error(textErrors.updateExpenseError);
      console.error(textErrors.updateExpenseError, error);
      throw error;
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        error,
        isLoading,
        token,
        fetchExpenses: getExpenses, // Переименовано для ясности
        addExpense: addNewExpense,
        updateExpense: editExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
