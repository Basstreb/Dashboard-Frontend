import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { api } from '../../const/Url'
import { useForm } from 'react-hook-form'

import '../../styles/Modal.css'

const ModalClient = props => {

    const [check, setCheck] = useState(false);
    const [id, setId] = useState('');

    const { register, handleSubmit, setValue } = useForm();

    const submitClient = async (data) => {

        const response = await fetch(api + "/create_client", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        // Check correct answer
        props.onClose();
        window.location.reload(false);
        await response.json();
        // var content = await response.json();
        // console.log(content);
    }

    const submitUpdateClient = async (data) => {

        const clientId = String(id)
        const companyName = data.companyName
        const managerName = data.managerName
        const managerCharge = data.managerCharge
        const phoneNumber = data.phoneNumber
        const cif = data.cif
        const direction = data.direction

        const responseClient = await fetch(api + "/update_client", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                companyName,
                managerName,
                managerCharge,
                phoneNumber,
                cif,
                direction,
            })
        });

        const responseCLientOffers = await fetch(api + "/update_client_offers", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clientId,
                companyName,
            })
        });

        // Check correct answer
        props.onClose();
        window.location.reload(false);
        await responseClient.json();
        await responseCLientOffers.json();
    }

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
            setCheck(true)
            setValue("companyName", props.client.companyName)
            setValue("managerName", props.client.managerName)
            setValue("managerCharge", props.client.managerCharge)
            setValue("phoneNumber", props.client.phoneNumber)
            setValue("cif", props.client.cif)
            setValue("direction", props.client.direction)
            setId(String(props.client.id))
        } else {
            setCheck(false)
            setId('')
        }
    }, [props.client, setValue])

    return ReactDOM.createPortal(
        <React.Fragment>
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">Añadir Cliente</h4>
                    </div>
                    <form onSubmit={check ? handleSubmit(submitUpdateClient) : handleSubmit(submitClient)} id="client">
                        <div className="modal-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Compañia</label>
                                <div className="col">
                                    <input type="text" className="form-control" required {...register("companyName")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Representante</label>
                                <div className="col">
                                    <input type="text" className="form-control" required {...register("managerName")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Cargo</label>
                                <div className="col">
                                    <input type="text" className="form-control" required {...register("managerCharge")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Teléfono</label>
                                <div className="col">
                                    <input type="tel" id="phone" className="form-control" required pattern="[0-9]{9}" {...register("phoneNumber")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">CIF</label>
                                <div className="col">
                                    <input type="text" className="form-control" required pattern="[A-Z]{1}[0-9]{8}" {...register("cif")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Dirección</label>
                                <div className="col">
                                    <input type="text" className="form-control" required {...register("direction")} />
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
        </React.Fragment >
        , document.getElementById('root')
    )
}

export default ModalClient
