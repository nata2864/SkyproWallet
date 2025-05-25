import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/transactions";

export async function fetchExpenses({ token, sortBy, filterBy }) {
  try {
    const params = {};
    if (sortBy) params.sortBy = sortBy;
    if (filterBy) params.filterBy = filterBy.join(",");

    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
      params,
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postExpense({ token, expense }) {
  try {
    const data = await axios.post(API_URL, expense, {
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

export async function patchExpense({ token, id, expense }) {
  try {
    const data = await axios.patch(API_URL + id, expense, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
