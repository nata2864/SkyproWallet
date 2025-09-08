// <<<<<<< pkt_week2
// import axios from 'axios'
// // import { API_URL_DATA, RoutesApp } from '../const'
// const API_URL = " https://wedev-api.sky.pro/api/transactions";
// const isNetworkAvailable = () => {
//     return navigator.onLine
// }

// export async function getDataPeriod({token, params} ) {
//     // console.log(token, JSON.stringify(params))
//     try {
//         if (!isNetworkAvailable()) {
//             throw new Error('Сеть недоступна')
//         }

//         const data = await axios.get(`${API_URL}`,  {
//             headers: {
//                 Authorization: 'Bearer ' + token,

                
//             },
//             // params: {
//             //     'start': '01-01-2024',
//             //     'end':'12-01-2025',
//             // }

//         })

 


//         return data.data
//         // когда работаем с axios, не забываем, что результат лежит в ключе datа
//     } catch (error) {
//         throw new Error(error.message)
//     }
// }




// // const API_URL = " https://wedev-api.sky.pro/api/transactions";
// =======
import axios from "axios";

const API_URL = " https://wedev-api.sky.pro/api/transactions";


export async function fetchExpenses({ token }) {
  try {
    const data = await axios.get(API_URL, {
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

export async function patchExpense({ token, id, expense}) {
    try {
        const data = await axios.patch(API_URL + id, expense, {
            headers: {
                Authorization: 'Bearer ' + token,
            'Content-Type': 'text/html',
        },
        })
        return data.data
    } catch (error) {
        throw new Error(error.message)
    }
}



