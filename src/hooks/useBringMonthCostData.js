import { useEffect, useState } from 'react'
import { api } from '../const/Url'
import axios from 'axios'

const API = api + '/price_cost';

const useBringMonthCostData = () => {
    const [cost, setCost] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setCost(res.data)
            })
    }, []);

    return cost
}

export default useBringMonthCostData
