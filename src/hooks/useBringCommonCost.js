import { useEffect, useState } from 'react'
import { api } from '../const/Url'
import axios from 'axios'

const API = api + '/list_common';

const useBringCommonCost = () => {
    const [commonCost, setCommonCost] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setCommonCost(res.data)
            })
    }, []);

    return commonCost
}

export default useBringCommonCost
