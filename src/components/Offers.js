import React, { useState } from 'react'
import useBringClients from '../hooks/useBringClients';
import useBringOffers from '../hooks/useBringOffers';
import ModalOffer from './Modals/ModalOffer';
import ModalErase from './Modals/ModalErase';

import { AiFillDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

const Offers = () => {

    const clients = useBringClients();
    const offers = useBringOffers();

    const [showModalOffer, setShowModalOffer] = useState(false)
    const [showModalErase, setShowModalErase] = useState(false)
    const [idForm, setIdForm] = useState("1")
    const [idOffer, setIdOffer] = useState("1")
    const [check, setCheck] = useState(false)
    const [switchCliOff, setSwitchCliOff] = useState(0);

    function showStatus(string) {
        switch (string) {
            case "PENDING":
                return <div className="pending">Pendiente</div>
            case "APPROVED":
                return <div className="approved">Aprobado</div>
            case "REJECTED":
                return <div className="rejected">Rechazado</div>
            case "PAYMENT_PENDING":
                return <div className="approved">Pendiente</div>
            case "PAYD":
                return <div className="approved">Cobrado</div>
            default:
                return <div>Error</div>
        }
    }

    const formatDate = (string) => {
        const newDate = string.split("T", 1)
        return newDate
    }

    const cleanForm = () => {
        document.getElementById("offer").reset();
    }

    const clientFilter = clients && clients.filter(client => client.id === parseInt(idForm));
    const offerFilter = offers && offers.filter(offer => offer.id === parseInt(idOffer));

    return (
        <React.Fragment>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2 me-5">Ofertas</h1>

                    {clients ? <div className="form-control">
                        <label className="me-3">Cliente:</label>
                        <select name="id" className="selector" onChange={e => setIdForm(e.target.value)}>
                            {clients && clients.filter(client => client.deletedAt === null).map(client => (
                                <option value={client.id} key={client.id}>{client.companyName}</option>
                            ))}
                        </select>
                        <button className="ms-5 btn btn-primary" type="button" onClick={() => {
                            setShowModalOffer(true)
                            cleanForm()
                            setCheck(false)
                        }}>Agregar Oferta</button>
                    </div> : ""}
                </div>

                {check ? <ModalOffer onClose={() => setShowModalOffer(false)}
                    show={showModalOffer}
                    offer={offerFilter && offerFilter.find(offer => offer.clientId)}
                /> : <ModalOffer onClose={() => setShowModalOffer(false)}
                    show={showModalOffer}
                    client={clientFilter && clientFilter.find(client => client.id)}
                />}

                <ModalErase onClose={() => setShowModalErase(false)} show={showModalErase} check={switchCliOff} offer={offerFilter && offerFilter.find(offer => offer.id)} />

                <div className="table-responsive mt-2">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Id Cliente</th>
                                <th>Cliente</th>
                                <th>Oferta</th>
                                <th>Nombre Oferta</th>
                                <th>Precio</th>
                                <th>Precio IVA</th>
                                <th>Fecha de Decisión</th>
                                <th>Fecha de Creación</th>
                                <th>Código</th>
                                <th>Estado</th>
                                <th>PDF</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {offers && offers.filter(offer => offer.deletedAt === null).map(offer => (
                                <tr key={offer.id}>
                                    <td>
                                        {offer.clientId}
                                    </td>
                                    <td>
                                        {offer.companyName}
                                    </td>
                                    <td>
                                        {offer.offer}
                                    </td>
                                    <td>
                                        {offer.offerName}
                                    </td>
                                    <td>
                                        {offer.price}€
                                    </td>
                                    <td>
                                        {offer.priceIva}€
                                    </td>
                                    <td>
                                        {formatDate(offer.decisionDate)}
                                    </td>
                                    <td>
                                        {formatDate(offer.createdAt)}
                                    </td>
                                    <td>
                                        {offer.code}
                                    </td>
                                    <td>
                                        {showStatus(offer.status)}
                                    </td>
                                    <td>
                                        <a href={"/pdf/" + offer.code + ".pdf"} target="_blank" rel="noreferrer"><button className="btn btn-secondary">PDF</button></a>
                                    </td>
                                    <td><button className="btn" onClick={() => {
                                        setShowModalOffer(true)
                                        cleanForm()
                                        setIdOffer(offer.id)
                                        setCheck(true)
                                    }}>{<BiEditAlt />}</button></td>
                                    <td><button className="btn" type="button" onClick={() => {
                                        setIdOffer(offer.id)
                                        setShowModalErase(true)
                                        setSwitchCliOff(2)
                                    }}> {<AiFillDelete />} </button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </main>
        </React.Fragment>
    )
}

export default Offers
