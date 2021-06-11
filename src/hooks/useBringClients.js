import { useEffect, useState } from 'react';
import { api } from '../const/Url';
import axios from 'axios';

const API = api + '/list_client';

const useBringClients = () => {
    const [clients, setClients] = useState([]);


    useEffect(() => {
        axios.get(API)
            .then(res => {
                setClients(res.data)
            })
    }, []);

    return clients
}

export default useBringClients
