import { useEffect, useState } from 'react'
import { api } from '../const/Url'
import axios from 'axios'

const API = api + '/list_offer';

const useBringOffers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setOffers(res.data)
            })
    }, []);

    return offers
}

export default useBringOffers
