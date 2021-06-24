import { useEffect, useState } from 'react'
import { api } from '../const/Url'
import axios from 'axios'


const API = api + '/list_staff';
const API2 = api + '/staff_cost';

const useBringStaff = () => {
    const [staffCost, setStaffCost] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setStaffCost(res.data)
            })
    }, []);

    return staffCost
}

const useBringStaffData = () => {
    const [staffCost, setStaffCost] = useState([]);

    useEffect(() => {
        axios.get(API2)
            .then(res => {
                setStaffCost(res.data)
            })
    }, []);

    return staffCost
}

export { useBringStaff, useBringStaffData }
