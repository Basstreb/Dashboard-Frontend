import React from 'react'
import { useBringIvaAcumulative, useBringIvaRepercuted, useBringIvaSupported } from '../hooks/useBringIva';

const Iva = () => {

    const ivaSupported = useBringIvaSupported();
    const ivaRepercuted = useBringIvaRepercuted();
    const ivaAcumulative = useBringIvaAcumulative();

    const formatDate = (string) => {
        const newDate = string.split("T", 1)
        return newDate
    }

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">IVA</h1>

                <div>
                    Total acumulado: {ivaAcumulative}
                </div>
            </div>

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
                            <tr>
                                <td>
                                    {iva.name}
                                </td>
                                <td>
                                    {iva.iva.toFixed(2)}
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
                            <tr>
                                <td>
                                    {iva.name}
                                </td>
                                <td>
                                    {iva.iva.toFixed(2)}
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
                            <tr>
                                <td>
                                    {iva.name}
                                </td>
                                <td>
                                    {iva.iva.toFixed(2)}
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
