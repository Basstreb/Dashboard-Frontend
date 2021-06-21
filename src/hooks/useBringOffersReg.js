import { useEffect, useState } from 'react'
import { api } from '../const/Url'
import axios from 'axios'

const API = api + '/list_offer_reg';

const useBringOffersReg = () => {
    const [offerReg, setOfferReg] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setOfferReg(res.data)
            })
    }, []);

    return offerReg
}

export default useBringOffersReg
