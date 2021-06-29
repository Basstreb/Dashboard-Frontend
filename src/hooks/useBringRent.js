import { useEffect, useState } from 'react'
import { api } from '../const/Url'
import axios from 'axios'

const API = api + '/rent';

const useBringRent = () => {
    const [rent, setRent] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setRent(res.data)
            })
    }, []);

    return rent
}

export { useBringRent }
