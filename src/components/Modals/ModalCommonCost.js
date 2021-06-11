import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { api } from '../../const/Url'
import axios from 'axios'


const ModalCommonCost = props => {

    const [check, setCheck] = useState(false);
    const [clientName, setClient] = useState('');
    const [clientId, setClientId] = useState('');
    const [id, setId] = useState();

    const { register, handleSubmit, setValue, unregister } = useForm();

    const formatDate = (string) => {
        const newDate = string.split("T", 1)
        return newDate
    }

    const submitCommonCost = (data) => {
        const commonCostsName = data.commonCostsName;
        const clientId = data.clientId;
        const clientName = data.clientName;
        const amount = data.amount;
        const costDate = data.costDate;
        const typo = data.typo;
        const iva = data.iva;

        var formData = new FormData();

        for (let i = 0; i < data.pics.length; i++) {
            formData.append("imgs", data.pics[i])
        }

        axios.post(api + "/upload_img",
            formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).catch(function () {
            console.log('FAILURE!!');
        });

        axios.post(api + "/create_common",
            JSON.stringify({
                commonCostsName,
                clientId,
                clientName,
                amount,
                costDate,
                typo,
                iva
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

    const submitUpdateCommonCost = (data) => {
        const commonCostsName = data.commonCostsName;
        const clientId = data.clientId;
        const clientName = data.clientName;
        const amount = data.amount;
        const costDate = data.costDate;
        const typo = data.typo;
        const iva = data.iva;

        var formData = new FormData();

        for (let i = 0; i < data.pics.length; i++) {
            formData.append("imgs", data.pics[i])
        }
        formData.append("imgs", id)

        axios.post(api + "/upload_img",
            formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).catch(function () {
            console.log('FAILURE!!');
        });

        axios.post(api + "/update_common",
            JSON.stringify({
                id,
                commonCostsName,
                clientId,
                clientName,
                amount,
                costDate,
                typo,
                iva
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

    useEffect(() => {
        if (props.client) {
            setClient(props.client.companyName)
            setValue("clientName", props.client.companyName)
            setClientId(String(props.client.id))
            setValue("clientId", String(props.client.id))
        }

        if (props.cost) {
            setCheck(true)
            setValue("costDate", formatDate(props.cost.costDate)[0])
            setValue("commonCostsName", props.cost.commonCostsName)
            setValue("amount", String(props.cost.amount))
            setId(String(props.cost.id))
            setClientId(props.cost.clientId)
            setClient(props.cost.clientName)
            setValue("typo", String(props.cost.typo))
            setValue("iva", String(props.cost.iva))
        } else {
            setCheck(false)
            unregister("percent")
            unregister("status")
            setValue("decisionDate", "")
            setId('')
            setValue("price", "")
        }
    }, [props.client, props.cost, setValue, unregister])


    return (
        <React.Fragment>
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>

                    <div className="modal-header">
                        <h4 className="modal-title">Añadir Cliente</h4>
                    </div>

                    <form id="cost1" onSubmit={check ? handleSubmit(submitUpdateCommonCost) : handleSubmit(submitCommonCost)}>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Id Cliente</label>
                                <div className="col">
                                    <input type="text" className="form-control" value={clientId} required readOnly {...register("clientId")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Cliente</label>
                                <div className="col">
                                    <input type="text" className="form-control" value={clientName} required readOnly {...register("clientName")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Gasto</label>
                                <div className="col">
                                    <input type="text" className="form-control" required {...register("commonCostsName")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Importe</label>
                                <div className="col">
                                    <input type="number" className="form-control" required {...register("amount")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Tipo</label>
                                <div className="col">
                                    <select className="form-control" {...register("typo")}>
                                        <option value="GASOL">Gasolina</option>
                                        <option value="FOOD">Comida</option>
                                        <option value="LIGHT">Luz</option>
                                        <option value="OTHER">Otros</option>
                                    </select>                                </div>
                                <label className="col-sm-2 col-form-label">IVA</label>
                                <div className="col">
                                    <select className="form-control" {...register("iva")}>
                                        <option value="4">4%</option>
                                        <option value="10">10%</option>
                                        <option value="21">21%</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Fecha Dec.</label>
                                <div className="col">
                                    <input type="date" className="form-control" required min="2021-01-01" max="2021-12-31" {...register("costDate")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Foto: </label>
                                <div className="col">
                                    <input className="form-control" accept="image/*" capture="environment" type="file" {...register("pics")} />
                                </div>
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

export default ModalCommonCost
