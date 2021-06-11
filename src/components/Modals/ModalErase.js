import React, { useEffect, useState } from 'react'
import '../../styles/Modal.css'
import { api } from '../../const/Url'
import axios from 'axios'

const ModalErase = props => {

    const [idErase, setIdErase] = useState(0)

    const Delete = (id, key) => {
        switch (key) {
            case 1:
                const clientId = String(id)

                axios.post(api + "/delete_client_offers",
                    JSON.stringify({
                        clientId,
                    }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                ).catch(function (error) {
                    console.log(error);
                })

                axios.post(api + "/delete_client",
                    JSON.stringify({
                        id,
                    }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                ).catch(function (error) {
                    console.log(error);
                }).then(function () {
                    window.location.reload(false);
                })

                props.onClose();
                break;
            case 2:

                axios.post(api + "/delete_offer",
                    JSON.stringify({
                        id,
                    }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                ).catch(function (error) {
                    console.log(error);
                }).then(function () {
                    window.location.reload(false);
                })

                props.onClose();
                break;
            case 3:
                axios.post(api + "/delete_common",
                    JSON.stringify({
                        id,
                    }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                ).catch(function (error) {
                    console.log(error);
                }).then(function () {
                    window.location.reload(false);
                })

                props.onClose();
                break;
            case 4:
                axios.post(api + "/delete_staff",
                    JSON.stringify({
                        id,
                    }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                ).catch(function (error) {
                    console.log(error);
                }).then(function () {
                    window.location.reload(false);
                })

                props.onClose();
                break;
            default:
                break;
        }
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
            setIdErase(props.client.id)
        } else if (props.offer) {
            setIdErase(props.offer.id)
        } else if (props.costCom) {
            setIdErase(props.costCom.id)
        } else if (props.staff) {
            setIdErase(props.staff.id)
        }
    }, [props])

    return (
        <React.Fragment>
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className="modal-content modal-content2" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">Eliminar</h4>
                    </div>
                    <div className="modal-body">
                        ¿Esta seguro de que desa borrarlo?
                    </div>

                    <div className="modal-footer">
                        <button onClick={props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        {/* <button type="submit" className="btn btn-danger" onClick={() => props.check ? submitDeleteUser(props.client.id) : submitDeleteOffer(props.offer.id)}>Borrar</button> */}
                        <button type="submit" className="btn btn-danger" onClick={() => Delete(idErase, props.check)}>Borrar</button>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalErase
