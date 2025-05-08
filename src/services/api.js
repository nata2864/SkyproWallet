import axios from 'axios'
import { API_URL_DATA, RoutesApp } from '../const'

const isNetworkAvailable = () => {
    return navigator.onLine
}

export async function getDataPeriod({token, params} ) {
    console.log(token, JSON.stringify(params))
    try {
        if (!isNetworkAvailable()) {
            throw new Error('Сеть недоступна')
        }

        const data = await axios.get(`${API_URL_DATA}`,  {
            headers: {
                Authorization: 'Bearer ' + token,

                
            },
            // params: {
            //     'start': '01-01-2024',
            //     'end':'12-01-2025',
            // }

        })

 


        return data.data
        // когда работаем с axios, не забываем, что результат лежит в ключе datа
    } catch (error) {
        throw new Error(error.message)
    }
}
