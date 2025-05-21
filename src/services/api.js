
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




const API_URL_PERIOD = " https://wedev-api.sky.pro/api/transactions/period";

export async function getDataPeriod({ token, period }) {
    if (!navigator.onLine) {
        throw new Error('Сеть недоступна');
    }

    try {
        const response = await fetch("https://wedev-api.sky.pro/api/transactions/period", {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                // 'Content-Type': 'text/html', // заменено с text/html на правильный тип
            },
            body: JSON.stringify({
                'start': period.start,
                'end': period.end,
            }),
            // body: JSON.stringify({
            //     'start': '6-1-2024',
            //     'end': '6-1-2025',
            // }),
 
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ошибка при запросе');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}


// export async function getDataPeriod({ token, period }) {
//     if (!navigator.onLine) {
//         throw new Error('Сеть недоступна');
//     }

//     try {
//         const response = await axios.post(
//             "https://wedev-api.sky.pro/api/transactions/period",
//             {
//                 start: period.start,
//                 end: period.end,
//             },
//             {
//                 headers: {
//                     Authorization: 'Bearer ' + token,
//                     'Content-Type': 'text/html',
//                 },
//             }
//         );

//         return response.data;
//     } catch (error) {
//         throw new Error(error.response?.data?.message || error.message);
//     }
// }




// export async function getDataPeriod({token, period} ) {
//     // console.log(token, JSON.stringify(params))
//     try {
//         if (!isNetworkAvailable()) {
//             throw new Error('Сеть недоступна')
//         }

//         const data = await axios.post(`${API_URL_PERIOD}`,  {
//             headers: {
//                 Authorization: 'Bearer ' + token,

                
//             },
//             body: {
//                 'start': '01-01-2024',
//                 'end':'12-01-2025',
//             }

//         })

 


//         return data.data
//         // когда работаем с axios, не забываем, что результат лежит в ключе datа
//     } catch (error) {
//         throw new Error(error.message)
//     }
// }

