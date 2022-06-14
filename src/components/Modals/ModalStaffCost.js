import React, { useEffect, useState } from 'react'
import { api } from '../../const/Url'
import axios from 'axios'
import useBringOffers from '../../hooks/useBringOffers';


const ModalStaffCost = props => {

    const offers = useBringOffers();

    const [check, setCheck] = useState(false);
    const [id, setId] = useState(' ');
    const [staffName, setStaffName] = useState(' ')
    const [amount, setAmount] = useState(' ')
    const [cost, setCost] = useState(' ')
    // const [socialInsurances, setSocialInsurances] = useState(' ')
    const [payDate, setPayDate] = useState(' ')
    const [project1, setProject1] = useState(' ');
    const [project2, setProject2] = useState(' ');
    const [pr2Check, setPr2Check] = useState(false);
    const [project3, setProject3] = useState(' ');
    const [pr3Check, setPr3Check] = useState(false);
    const [project4, setProject4] = useState(' ');
    const [pr4Check, setPr4Check] = useState(false);
    const [per1, setPer1] = useState('0');
    const [per2, setPer2] = useState('0');
    const [per3, setPer3] = useState('0');
    const [per4, setPer4] = useState('0');

    const submitStaffCost = e => {
        e.preventDefault()

        const data = {
            staffName,
            amount,
            cost,
            // socialInsurances,
            project1,
            per1,
            project2,
            per2,
            project3,
            per3,
            project4,
            per4,
            payDate
        }

        console.log(data);

        const data2 = {
            amount,
            project1,
            per1,
            project2,
            per2,
            project3,
            per3,
            project4,
            per4
        }

        console.log(data2);

        axios.post(api + "/create_staff",
            data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).catch(function (error) {
            console.log(error);
        })

        axios.post(api + "/create_staff_pr",
            data2, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).catch(function (error) {
            console.log(error);
        }).then(function () {
            window.location.reload(false);
        });

        props.onClose();
    }

    const submitUpdateStaffCost = e => {
        e.preventDefault()

        const data = {
            id,
            staffName,
            amount,
            cost,
            project1,
            per1,
            project2,
            per2,
            project3,
            per3,
            project4,
            per4,
            payDate
        }

        console.log(data)

        axios.post(api + "/update_staff",
            JSON.stringify({
                id,
                staffName,
                amount,
                cost,
                project1,
                per1,
                project2,
                per2,
                project3,
                per3,
                project4,
                per4,
                payDate
            }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).catch(function (error) {
            console.log(error);
        })

        axios.post(api + "/update_staff_pr",
            JSON.stringify({
                id,
                staffName,
                amount,
                cost,
                project1,
                per1,
                project2,
                per2,
                project3,
                per3,
                project4,
                per4,
                payDate
            }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).catch(function (error) {
            console.log(error);
        }).then(function () {
            window.location.reload(false);
        });

        props.onClose();
    }

    const formatDate = (string) => {
        const newDate = string.split("T", 1)
        return newDate
    }

    const onChangePr1 = e => {
        setProject1(e)
        setPr2Check(true)
    }

    const onChangePr2 = e => {
        setProject2(e)
        setPr3Check(true)
    }

    const onChangePr3 = e => {
        setProject3(e)
        setPr4Check(true)
    }

    const onChangePr4 = e => {
        setProject4(e)
    }

    useEffect(() => {
        if (props.staff) {
            setCheck(true)
            setStaffName(props.staff.staffName)
            setAmount(String(props.staff.amount))
            setCost(String(props.staff.cost))
            // setSocialInsurances(String(props.staff.socialInsurances))
            setProject1(props.staff.project1)
            if (props.staff.project1 && props.staff.project1 !== " ") {
                setPr2Check(true)
            } else {
                setPr2Check(false)
            }
            setProject2(props.staff.project2)
            if (props.staff.project2 && props.staff.project2 !== " ") {
                setPr3Check(true)
            } else {
                setPr3Check(false)
            }
            setProject3(props.staff.project3)
            if (props.staff.project3 && props.staff.project3 !== " ") {
                setPr4Check(true)
            } else {
                setPr4Check(false)
            }
            setProject4(props.staff.project4)
            setPayDate(formatDate(props.staff.payDate)[0])
            setId(String(props.staff.id))
            setPer1(String(props.staff.per1))
            setPer2(String(props.staff.per2))
            setPer3(String(props.staff.per3))
            setPer4(String(props.staff.per4))
        } else {
            setCheck(false)
            setStaffName('')
            setAmount('')
            setCost('')
            // setSocialInsurances('')
            setProject1(' ')
            setProject2(' ')
            setProject3(' ')
            setProject4(' ')
            setPayDate('')
            setId('')
            setPr2Check(false)
            setPr3Check(false)
            setPr4Check(false)
            setPer1(String(0))
            setPer2(String(0))
            setPer3(String(0))
            setPer4(String(0))
        }
    }, [props.staff])

    return (
        <React.Fragment>
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>

                    <div className="modal-header">
                        <h4 className="modal-title">Añadir Gasto Personal</h4>
                    </div>

                    <form id="cost2" onSubmit={check ? submitUpdateStaffCost : submitStaffCost}>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Empleado</label>
                                <div className="col">
                                    <input type="text" className="form-control" value={staffName} required onChange={e => setStaffName(e.target.value)} />
                                </div>
                                <label className="col-sm-2 col-form-label">Importe</label>
                                <div className="col">
                                    <input type="number" className="form-control" value={amount} min="0" required onChange={e => setAmount(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Coste</label>
                                <div className="col">
                                    <input type="number" className="form-control" value={cost} min="0" required onChange={e => setCost(e.target.value)} />
                                </div>

                                <label className="col-sm-2 col-form-label">Valor SS</label>
                                <div className="col">
                                    <input type="number" className="form-control" value={amount - cost} readOnly />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Proyecto 1</label>
                                <div className="col">
                                    <select className="form-control" value={project1} onChange={(e) => { onChangePr1(e.target.value) }}>
                                        <option value=" "> </option>
                                        {offers && offers.filter(offer => offer.deletedAt === null &&
                                            (offer.status === "PAYD" || offer.status === "APPROVED" || offer.status === "PAYMENT_PENDING")).map(offer => (
                                                <option key={offer.id} value={offer.id} >{offer.offerName}</option>
                                            ))}
                                    </select>
                                </div>

                                <label className="col-sm-2 col-form-label">Porcentaje</label>
                                <div className="col">
                                    <input type="number" className="form-control" min="0" max={100 - per2 - per3 - per4} value={per1} onChange={(e) => { setPer1(e.target.value) }} />
                                </div>

                            </div>

                            {pr2Check &&
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Proyecto 2</label>
                                    <div className="col">
                                        <select className="form-control" value={project2} onChange={e => onChangePr2(e.target.value)}>
                                            <option value=" "> </option>
                                            {offers && offers.filter(offer => offer.deletedAt === null &&
                                                (offer.status === "PAYD" || offer.status === "APPROVED" || offer.status === "PAYMENT_PENDING")).map(offer => (
                                                    <option key={offer.id} value={offer.id}>{offer.offerName}</option>
                                                ))}
                                        </select>
                                    </div>

                                    <label className="col-sm-2 col-form-label">Porcentaje</label>
                                    <div className="col">
                                        <input type="number" className="form-control" min="0" max={100 - per1 - per3 - per4} value={per2} onChange={(e) => { setPer2(e.target.value) }} />
                                    </div>
                                </div>}

                            {pr3Check &&
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Proyecto 3</label>
                                    <div className="col">
                                        <select className="form-control" value={project3} onChange={e => onChangePr3(e.target.value)}>
                                            <option value=" "> </option>
                                            {offers && offers.filter(offer => offer.deletedAt === null &&
                                                (offer.status === "PAYD" || offer.status === "APPROVED" || offer.status === "PAYMENT_PENDING")).map(offer => (
                                                    <option key={offer.id} value={offer.id}>{offer.offerName}</option>
                                                ))}
                                        </select>
                                    </div>

                                    <label className="col-sm-2 col-form-label">Porcentaje</label>
                                    <div className="col">
                                        <input type="number" className="form-control" value={per3} min="0" max={100 - per1 - per2 - per4} onChange={(e) => { setPer3(e.target.value) }} />
                                    </div>
                                </div>}

                            {pr4Check &&
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Proyecto 4</label>
                                    <div className="col">
                                        <select className="form-control" value={project4} onChange={e => onChangePr4(e.target.value)}>
                                            <option value=" "> </option>
                                            {offers && offers.filter(offer => offer.deletedAt === null &&
                                                (offer.status === "PAYD" || offer.status === "APPROVED" || offer.status === "PAYMENT_PENDING")).map(offer => (
                                                    <option key={offer.id} value={offer.id}>{offer.offerName}</option>
                                                ))}
                                        </select>
                                    </div>

                                    <label className="col-sm-2 col-form-label">Porcentaje</label>
                                    <div className="col">
                                        <input type="number" className="form-control" value={per4} min="0" max={100 - per1 - per2 - per3} onChange={(e) => { setPer4(e.target.value) }} />
                                    </div>
                                </div>}

                        </div>

                        <div className="form-group row mt-2">
                            <label className="col-sm-2 col-form-label">Mes Nom.</label>
                            <div className="col">
                                <input type="date" className="form-control" value={payDate} required min="2021-01-01" onChange={e => setPayDate(e.target.value)} />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="submit" className="btn btn-primary">Añadir</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalStaffCost
