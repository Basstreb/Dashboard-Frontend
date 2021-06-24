import { useEffect, useState } from 'react';
import { api } from '../const/Url';
import axios from 'axios';

const API_1 = api + '/list_iva_supported_price';
const API_2 = api + '/list_iva_repercuted_price';
const API_3 = api + '/list_iva_supported';
const API_4 = api + '/list_iva_repercuted';
const API_5 = api + '/list_iva_total';
const API_6 = api + '/list_iva_paid';
const API_7 = api + '/list_iva_paid_price';

const useBringPriceIvaSupported = () => {
    const [supported, setSupported] = useState([]);


    useEffect(() => {
        axios.get(API_1)
            .then(res => {
                setSupported(res.data)
            })
    }, []);

    return supported
}

const useBringIvaSupported = () => {
    const [supported, setSupported] = useState([]);


    useEffect(() => {
        axios.get(API_3)
            .then(res => {
                setSupported(res.data)
            })
    }, []);

    return supported
}

const useBringPriceIvaRepercuted = () => {
    const [repercuted, setRepercuted] = useState([]);


    useEffect(() => {
        axios.get(API_2)
            .then(res => {
                setRepercuted(res.data)
            })
    }, []);

    return repercuted
}

const useBringIvaRepercuted = () => {
    const [repercuted, setRepercuted] = useState([]);


    useEffect(() => {
        axios.get(API_4)
            .then(res => {
                setRepercuted(res.data)
            })
    }, []);

    return repercuted
}

const useBringIvaAcumulative = () => {
    const [repercuted, setRepercuted] = useState([]);


    useEffect(() => {
        axios.get(API_5)
            .then(res => {
                setRepercuted(res.data)
            })
    }, []);

    return repercuted
}

const useBringIvaPaid = () => {
    const [paid, setPaid] = useState([]);


    useEffect(() => {
        axios.get(API_6)
            .then(res => {
                setPaid(res.data)
            })
    }, []);

    return paid
}

const useBringIvaPaidPrice = () => {
    const [paid, setPaid] = useState([]);


    useEffect(() => {
        axios.get(API_7)
            .then(res => {
                setPaid(res.data)
            })
    }, []);

    return paid
}

export { useBringPriceIvaSupported, useBringPriceIvaRepercuted, useBringIvaSupported, useBringIvaRepercuted, useBringIvaAcumulative, useBringIvaPaid, useBringIvaPaidPrice }
