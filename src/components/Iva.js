import React from 'react';
import { useForm } from 'react-hook-form';
import { useBringIvaAcumulative, useBringIvaPaid, useBringIvaRepercuted, useBringIvaSupported } from '../hooks/useBringIva';
import { api } from '../const/Url';
import axios from 'axios';

const Iva = () => {

    const ivaSupported = useBringIvaSupported();
    const ivaRepercuted = useBringIvaRepercuted();
    const ivaAcumulative = useBringIvaAcumulative();
    const ivaPaid = useBringIvaPaid();

    const { register, handleSubmit } = useForm();

    const formatDate = (string) => {
        const newDate = string.split("T", 1)
        return newDate
    }

    const onSubmit = data => {
        axios.post(api + "/create_iva_paid",
            data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).catch(function (error) {
            console.log(error);
        }).then(function () {
            window.location.reload(false);
        });
    }

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">IVA</h1>

                <div>
                    Total acumulado: {ivaAcumulative && parseFloat(ivaAcumulative).toFixed(2)}
                </div>
            </div>

            {ivaAcumulative && parseFloat(ivaAcumulative) !== 0 ?
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row mt-2 mb-3">
                        <label className="col-sm-2 col-form-label">Pago:</label>
                        <input type="number" min="0" className="col form form-control" {...register("iva")} />

                        <label className="col-sm-2 col-form-label">Fecha:</label>
                        <input type="date" className="col form form-control" {...register("date")} />

                        <button type="submit" className="col-sm-2  ms-5 btn btn-primary">Pago Iva</button>
                    </div>
                </form> : ""}

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                <h1 className="h5">IVA Soportado</h1>
            </div>

            <div className="table-responsive mt-2">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Iva
                            </th>
                            <th>
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ivaSupported && ivaSupported.map(iva => (
                            <tr key={iva.id}>
                                <td>
                                    {iva.name}
                                </td>
                                <td>
                                    {iva.iva.toFixed(2)}€
                                </td>
                                <td>
                                    {formatDate(iva.date)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                <h1 className="h5">IVA Repercutido</h1>
            </div>

            <div className="table-responsive mt-2">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Iva
                            </th>
                            <th>
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ivaRepercuted && ivaRepercuted.map(iva => (
                            <tr key={iva.id}>
                                <td>
                                    {iva.name}
                                </td>
                                <td>
                                    {iva.iva.toFixed(2)}€
                                </td>
                                <td>
                                    {formatDate(iva.date)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                <h1 className="h5">IVA Pagado</h1>
            </div>

            <div className="table-responsive mt-2">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>
                                Iva
                            </th>
                            <th>
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ivaPaid && ivaPaid.map(iva => (
                            <tr key={iva.id}>
                                <td>
                                    {iva.amount.toFixed(2)}€
                                </td>
                                <td>
                                    {formatDate(iva.date)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </main>
    )
}

export default Iva
