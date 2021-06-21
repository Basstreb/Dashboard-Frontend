import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../const/Url';
import { useForm } from 'react-hook-form';
import useBringOffersReg from '../../hooks/useBringOffersReg';
import '../../styles/Modal.css';


const ModalOffer = props => {

    const offerReg = useBringOffersReg();

    const [companyName, setCompany] = useState('');
    const [clientId, setClientId] = useState('');
    const [decisionDate, setDecisionDate] = useState('');
    const [id, setId] = useState('')
    const [check, setCheck] = useState(false);
    const [percent, setPercent] = useState();
    const [status, setStatus] = useState();

    const { register, handleSubmit, setValue, unregister } = useForm();

    const datePickerId = new Date().toISOString().split("T")[0];

    const formatDate = (string) => {
        const newDate = string.split("T", 1)
        return newDate
    }

    const submitOffer = async (data) => {

        const clientId = data.clientId
        const companyName = data.companyName
        const decisionDate = data.decisionDate
        const offer = data.offer
        const offerName = data.offerName
        const price = data.price

        var formData = new FormData();

        for (let i = 0; i < data.docs.length; i++) {
            formData.append("docs", data.docs[i])
        }

        axios.post(api + "/upload_pdf",
            formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).catch(function () {
            console.log('FAILURE!!');
        });

        const response = await fetch(api + "/create_offer", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clientId,
                companyName,
                decisionDate,
                offer,
                offerName,
                price
            })
        });

        // Check correct answer
        props.onClose()
        window.location.reload(false);
        await response.json();
    }

    const submitUpdateOffer = async (data) => {
        const offer = data.offer
        const offerName = data.offerName
        const decisionDate = data.decisionDate
        let status = data.status
        const price = data.price
        const percentN = data.percent

        var formData = new FormData();

        for (let i = 0; i < data.docs.length; i++) {
            formData.append("docs", data.docs[i])
        }

        formData.append("docs", id)

        axios.post(api + "/upload_update_pdf",
            formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).catch(function () {
            console.log('FAILURE!!');
        });

        if (percentN !== "0") {
            axios.post(api + "/create_offer_reg",
                JSON.stringify({
                    id,
                    price,
                    percentN,
                }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).catch(function () {
                console.log('FAILURE!!');
            });
        }

        if (percent + parseInt(percentN) === 100) {
            status = "PAYD";
            axios.post(api + "/update_offer",
                JSON.stringify({
                    id,
                    offer,
                    offerName,
                    decisionDate,
                    status,
                    price,
                    percentN,
                }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).catch(function () {
                console.log('FAILURE!!');
            }).then(function () {
                window.location.reload(false);
            });
        } else {
            axios.post(api + "/update_offer",
                JSON.stringify({
                    id,
                    offer,
                    offerName,
                    decisionDate,
                    status,
                    price,
                    percentN,
                }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).catch(function () {
                console.log('FAILURE!!');
            }).then(function () {
                window.location.reload(false);
            });
        }

        props.onClose();
    }

    const offerRegFilter = offerReg && offerReg.filter(offer => offer.offerId === parseInt(id) && offer.percent !== 0)

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (props.client) {
            setCompany(props.client.companyName)
            setValue("companyName", props.client.companyName)
            setClientId(String(props.client.id))
            setValue("clientId", String(props.client.id))
        }

        if (props.offer) {
            setCheck(true)
            setDecisionDate(formatDate(props.offer.decisionDate)[0])
            setValue("decisionDate", formatDate(props.offer.decisionDate)[0])
            setValue("offer", props.offer.offer)
            setValue("offerName", props.offer.offerName)
            setId(String(props.offer.id))
            setClientId(props.offer.clientId)
            setCompany(props.offer.companyName)
            setValue("price", String(props.offer.price))
            setValue("status", props.offer.status)
            setStatus(props.offer.status)
            setValue("percent", String(0))
            setPercent(props.offer.percent)
        } else {
            setCheck(false)
            unregister("percent")
            unregister("status")
            setValue("decisionDate", "")
            setId('')
            setValue("price", "")
        }
    }, [props.client, props.offer, setValue, unregister])

    return (
        <React.Fragment>
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">Añadir Cliente</h4>
                    </div>
                    <form onSubmit={check ? handleSubmit(submitUpdateOffer) : handleSubmit(submitOffer)} id="offer">
                        <div className="modal-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Id Cliente</label>
                                <div className="col">
                                    <input type="text" className="form-control" value={clientId} required readOnly {...register("clientId")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Compañia</label>
                                <div className="col">
                                    <input type="text" className="form-control" value={companyName} required readOnly {...register("companyName")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Oferta</label>
                                <div className="col">
                                    {/* <input type="text" className="form-control" required value={offer} onChange={e => setOffer(e.target.value)} /> */}
                                    <input type="text" className="form-control" required {...register("offer")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Nombre Of.</label>
                                <div className="col">
                                    <input type="text" className="form-control" required {...register("offerName")} />
                                </div>
                            </div>

                            {check ?
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Fecha Dec.</label>
                                    <div className="col">
                                        {/* <input type="date" className="form-control" value={decisionDate} required min={decisionDate} max="2021-12-31" onChange={e => setDecisionDate(e.target.value)} /> */}
                                        <input type="date" className="form-control" min={decisionDate} max="2021-12-31" required {...register("decisionDate")} />
                                    </div>
                                    {status === "PAYMENT_PENDING" || status === "PAYD" || status === "APPROVED" ?
                                        <React.Fragment>
                                            <label className="col-sm-2 col-form-label">Precio</label>
                                            <div className="col">
                                                <input type="number" className="form-control" required readOnly min="0" {...register("price")} />
                                            </div>
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <label className="col-sm-2 col-form-label">Precio</label>
                                            <div className="col">
                                                <input type="number" className="form-control" required min="0" {...register("price")} />
                                            </div>
                                        </React.Fragment>}

                                </div>
                                : ""}

                            {check ?
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Estado</label>
                                    <div className="col">
                                        <select className="form-control" {...register("status")}>
                                            <option value="PENDING">Pendiente</option>
                                            <option value="REJECTED">Rechazado</option>
                                            <option value="APPROVED">Aceptado</option>
                                            <option value="PAYMENT_PENDING">Pendiente Cobro</option>
                                            <option value="PAYD">Cobrado</option>
                                        </select>
                                    </div>

                                    {status === "PAYMENT_PENDING" ?
                                        <React.Fragment>
                                            <label className="col-sm-2 col-form-label">Porcentaje</label>
                                            <div className="col">
                                                <input type="number" className="form-control" required min="0" max={100 - percent} {...register("percent")} />
                                            </div>
                                        </React.Fragment> : ""}

                                </div>
                                : <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Fecha Dec.</label>
                                    <div className="col">
                                        <input type="date" className="form-control" required min={datePickerId} max="2021-12-31" {...register("decisionDate")} />
                                    </div>

                                    <label className="col-sm-2 col-form-label">Precio</label>
                                    <div className="col">
                                        <input type="number" className="form-control" min="0" required {...register("price")} />
                                    </div>
                                </div>
                            }

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Archivo: </label>
                                <div className="col">
                                    <input className="form-control" accept="application/pdf" type="file" {...register("docs")} />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="submit" className="btn btn-primary">Añadir</button>
                        </div>


                        {offerRegFilter && offerRegFilter.length > 0 ?
                            <div className="table-responsive mt-2">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Porcentaje Cobrado</th>
                                            <th>Total Cobrado</th>
                                            <th>Fecha Cobro</th>
                                        </tr>
                                    </thead>
                                    <tbody className="align-middle">
                                        {offerReg && offerReg.filter(offer => offer.offerId === parseInt(id) && offer.percent !== 0).map(offer => (
                                            <tr key={offer.id}>
                                                <td>{offer.percent}</td>
                                                <td>{offer.priceFinal.toFixed(2)}</td>
                                                <td>{formatDate(offer.createdAt)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div> : ""}
                    </form>
                </div>
            </div>
        </React.Fragment >
    )
}

export default ModalOffer
