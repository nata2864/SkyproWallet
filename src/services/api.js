import axios from "axios";
import {  API_URL_NEW } from "../const";



export async function fetchExpenses({ token }) {
  try {
    const data = await axios.get(API_URL_NEW, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postExpense({ token, expense }) {
  try {
    const data = await axios.post(API_URL_NEW, expense, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// export async function patchExpense({ token, id, expense }) {
//   try {
//     const { data } = await axios.patch(
//       `https://wedev-api.sky.pro/api/transactions/${id}`,
//       expense,
//       {
//         headers: {
//           Authorization: 'Bearer ' + token,
//           // 'Content-Type': 'application/json',
//         },
//       }
//     );
//     return data.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

export async function patchExpense({ token, id, expense }) {
  if (!id) {
    throw new Error("ID не передан в patchExpense!");
  }

  try {
    console.log("ID:", id);
    console.log("Expense для отправки:", expense);

    const response = await axios.patch(
      `https://wedev-api.sky.pro/api/transactions/${id}`,
      expense,
      {
        headers: {
          Authorization: `Bearer ${token}`,
           "Content-Type": "",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка PATCH запроса:", error.response?.data || error.message);
    throw new Error(error.message);
  }
}


