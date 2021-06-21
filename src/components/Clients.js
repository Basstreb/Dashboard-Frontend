import React, { useState } from 'react'
import useBringClients from '../hooks/useBringClients';
import { AiFillDelete } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import ModalErase from './Modals/ModalErase';
import ModalClient from './Modals/ModalClient';


const Clients = () => {

    const clients = useBringClients();

    const [showModalClient, setShowModalClient] = useState(false)
    const [showModalErase, setShowModalErase] = useState(false)
    const [idForm, setIdForm] = useState("0")
    const [switchCliOff, setSwitchCliOff] = useState(0);

    const cleanForm = () => {
        document.getElementById("client").reset();
    }

    const clientFilter = clients && clients.filter(client => client.id === parseInt(idForm));

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Clientes</h1>

                <div className="text-end mb-3">
                    <button type="button" className="btn btn-primary" onClick={() => {
                        setShowModalClient(true)
                        cleanForm()
                        setIdForm("0")
                    }}>Agregar Cliente</button>
                </div>
            </div>

            <ModalClient onClose={() => setShowModalClient(false)} show={showModalClient} client={clientFilter && clientFilter.find(client => client.id)} />
            <ModalErase onClose={() => setShowModalErase(false)} show={showModalErase} check={switchCliOff} client={clientFilter && clientFilter.find(client => client.id)} />

            <div className="table-responsive mt-2">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Compañia</th>
                            <th>Representante</th>
                            <th>Cargo</th>
                            <th>Teléfono</th>
                            <th>CIF</th>
                            <th>Dirección</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        {clients && clients.filter(client => client.deletedAt === null).map(client => (
                            <tr key={client.id}>
                                <td>
                                    {client.id}
                                </td>
                                <td>
                                    {client.companyName}
                                </td>
                                <td>
                                    {client.managerName}
                                </td>
                                <td>
                                    {client.managerCharge}
                                </td>
                                <td>
                                    {client.phoneNumber}
                                </td>
                                <td>
                                    {client.cif}
                                </td>
                                <td>
                                    {client.direction}
                                </td>
                                <td><button className="btn" onClick={() => {
                                    setShowModalClient(true)
                                    cleanForm()
                                    setIdForm(client.id)
                                }}>{<BiEditAlt />}</button></td>
                                <td><button className="btn" type="button" onClick={() => {
                                    setShowModalErase(true)
                                    setIdForm(client.id)
                                    setSwitchCliOff(1)
                                }}> {<AiFillDelete />} </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Clients
