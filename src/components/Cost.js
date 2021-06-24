import React, { useState } from 'react'
import useBringCommonCost from '../hooks/useBringCommonCost'
import { AiFillDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
// import useBringClients from '../hooks/useBringClients';
import ModalCommonCost from './Modals/ModalCommonCost';
import ModalErase from './Modals/ModalErase';
import ModalStaffCost from './Modals/ModalStaffCost';
import { useBringStaff } from '../hooks/useBringStaff'
import useBringOffers from '../hooks/useBringOffers';

const Cost = () => {

    // const clients = useBringClients();
    const offers = useBringOffers();
    const commonCost = useBringCommonCost();
    console.log(commonCost);
    const staffCost = useBringStaff();

    const [showModalCost, setShowModalCost] = useState(false)
    const [showModalStaff, setShowModalStaff] = useState(false)
    const [showModalErase, setShowModalErase] = useState(false)
    const [eraseCostStaff, setEraseCostStaff] = useState()
    const [idForm, setIdForm] = useState("1")
    const [idCost, setIdCost] = useState("1")
    const [idStaff, setIdStaff] = useState(0)
    const [check, setCheck] = useState(false)
    const [switchCliOff, setSwitchCliOff] = useState();

    const formatDate = (string) => {
        const newDate = string.split("T", 1)
        return newDate
    }

    function showTypo(string) {
        switch (string) {
            case "GASOL":
                return <div>Gasolina</div>
            case "FOOD":
                return <div>Comida</div>
            case "LIGHT":
                return <div>Luz</div>
            case "OTHER":
                return <div>Otros</div>
            default:
                return <div>Error</div>
        }
    }

    const cleanForm = () => {
        document.getElementById("cost1").reset();
        document.getElementById("cost2").reset();
    }

    // const clientFilter = clients && clients.filter(client => client.id === parseInt(idForm));
    const offerFilter = offers && offers.filter(offer => offer.id === parseInt(idForm));
    const costFilter = commonCost && commonCost.filter(cost => cost.id === parseInt(idCost));
    const staffFilter = staffCost && staffCost.filter(staff => staff.id === parseInt(idStaff))

    const imgName = (n) => {
        return "IMG_21_" + n + ".png"
    }

    return (
        <React.Fragment>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                <div className="row d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2 me-5 col-3">Gastos Comunes</h1>

                    {offers ? <div className="form-control col">
                        <label className="me-3">Cliente:</label>
                        <select name="id" className="selector" onChange={e => setIdForm(e.target.value)}>
                            {offers && offers.filter(offer => offer.deletedAt === null).map(offer => (
                                <option value={offer.id} key={offer.id}>{offer.offerName}</option>
                            ))}
                        </select>
                        <button className="ms-5 btn btn-primary" type="button" onClick={() => {
                            setShowModalCost(true)
                            cleanForm()
                            setCheck(false)
                        }}>Agregar Gasto Común</button>
                    </div> : ""}
                </div>

                {check ? <ModalCommonCost onClose={() => setShowModalCost(false)}
                    show={showModalCost}
                    cost={costFilter && costFilter.find(cost => cost.id)}
                /> : <ModalCommonCost onClose={() => setShowModalCost(false)}
                    show={showModalCost}
                    offer={offerFilter && offerFilter.find(offer => offer.id)} />}

                {eraseCostStaff ?
                    <ModalErase onClose={() => setShowModalErase(false)} show={showModalErase} check={switchCliOff} costCom={costFilter && costFilter.find(cost => cost.id)} />
                    :
                    <ModalErase onClose={() => setShowModalErase(false)} show={showModalErase} check={switchCliOff} staff={staffFilter && staffFilter.find(staff => staff.id)} />}

                <div className="table-responsive mt-2">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Gasto</th>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Importe con IVA</th>
                                <th>Importe sin IVA</th>
                                <th>IVA</th>
                                <th>Gasto IVA</th>
                                <th>Fecha</th>
                                <th>Foto</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {commonCost && commonCost.filter(cost => cost.deletedAt === null).map(cost => (
                                <tr key={cost.id}>
                                    <td>
                                        {cost.commonCostsName}
                                    </td>
                                    <td>
                                        {cost.clientName}
                                    </td>
                                    <td>
                                        {showTypo(cost.typo)}
                                    </td>
                                    <td>
                                        {cost.amount}€
                                    </td>
                                    <td>
                                        {cost.amountW.toFixed(2)}€
                                    </td>
                                    <td>
                                        {cost.iva}%
                                    </td>
                                    <td>
                                        {(cost.amount - (cost.amount / (cost.iva / 100 + 1))).toFixed(2)}€
                                    </td>
                                    <td>
                                        {formatDate(cost.costDate)}
                                    </td>
                                    <td>
                                        <a href={"/img/" + imgName(cost.id)} target="_blank" rel="noreferrer"><button className="btn btn-secondary">Factura</button></a>
                                    </td>
                                    <td><button className="btn" onClick={() => {
                                        setShowModalCost(true)
                                        cleanForm()
                                        setIdCost(cost.id)
                                        setCheck(true)
                                    }}>{<BiEditAlt />}</button></td>
                                    <td><button className="btn" type="button" onClick={() => {
                                        setIdCost(cost.id)
                                        setShowModalErase(true)
                                        setSwitchCliOff(3)
                                        setEraseCostStaff(true)
                                    }}> {<AiFillDelete />} </button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Gastos de Personal</h1>

                    <div className="text-end mb-3">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            setShowModalStaff(true)
                            cleanForm()
                            setIdStaff(0)
                        }}>Agregar Gasto de Personal</button>
                    </div>
                </div>

                {idStaff === 0 ?
                    <ModalStaffCost onClose={() => setShowModalStaff(false)}
                        show={showModalStaff} />
                    : <ModalStaffCost onClose={() => setShowModalStaff(false)}
                        show={showModalStaff}
                        staff={staffFilter && staffFilter.find(staff => staff.id)} />}

                <div className="table-responsive mt-2">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Empleado</th>
                                <th>Importe Neto</th>
                                <th>Coste Empresa</th>
                                <th>Valor SS</th>
                                <th>Proyecto 1</th>
                                <th>Proyecto 2</th>
                                <th>Proyecto 3</th>
                                <th>Proyecto 4</th>
                                <th>Fecha</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {staffCost && staffCost.filter(offer => offer.deletedAt === null).map(staff => (
                                <tr key={staff.id}>
                                    <td>
                                        {staff.staffName}
                                    </td>
                                    <td>
                                        {staff.amount}
                                    </td>
                                    <td>
                                        {staff.cost}
                                    </td>
                                    <td>
                                        {staff.socialInsurances}
                                    </td>
                                    <td>
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col">
                                                {staff.project1}
                                            </div>
                                            <div className="col">
                                                {staff.per1}%
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {staff.project2 && staff.project2 !== " " ?
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col">
                                                    {staff.project2}
                                                </div>
                                                <div className="col">
                                                    {staff.per2}%
                                                </div>
                                            </div> : ""}
                                    </td>
                                    <td>
                                        {staff.project3 && staff.project3 !== " " ?
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col">
                                                    {staff.project3}
                                                </div>
                                                <div className="col">
                                                    {staff.per3}%
                                                </div>
                                            </div> : ""}
                                    </td>
                                    <td>
                                        {staff.project4 && staff.project4 !== " " ?
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col">
                                                    {staff.project4}
                                                </div>
                                                <div className="col">
                                                    {staff.per4}%
                                                </div>
                                            </div> : ""}
                                    </td>
                                    <td>
                                        {formatDate(staff.payDate)}
                                    </td>
                                    <td><button className="btn" onClick={() => {
                                        setShowModalStaff(true)
                                        cleanForm()
                                        setIdStaff(staff.id)
                                        setCheck(true)
                                    }}>{<BiEditAlt />}</button></td>
                                    <td><button className="btn" type="button" onClick={() => {
                                        setIdStaff(staff.id)
                                        setShowModalErase(true)
                                        setSwitchCliOff(4)
                                        setEraseCostStaff(false)
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

export default Cost
