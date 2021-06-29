import React from 'react'
import Chart from "react-google-charts";
import { useBringIvaPaidPrice, useBringPriceIvaRepercuted, useBringPriceIvaSupported } from '../hooks/useBringIva';
import useBringMonthCostData from '../hooks/useBringMonthCostData';
import useBringMonthData from '../hooks/useBringMonthData';
import { useBringRent } from '../hooks/useBringRent';
import { useBringStaffData } from '../hooks/useBringStaff';

const Graphic = () => {

    //Bring data from de db
    const offersMonthData = useBringMonthData();
    const offersMonthCostData = useBringMonthCostData();
    const ivaSupported = useBringPriceIvaSupported();
    const ivaRepercuted = useBringPriceIvaRepercuted();
    const ivaPaid = useBringIvaPaidPrice();
    const staffCostData = useBringStaffData();
    const offersRent = useBringRent();

    const rent = [["Proyecto", "Presupuesto", "Gasto", "Rentabilidad"]]

    offersRent && offersRent.map(offer => rent.push([offer.offerName, offer.total, offer.commonCost + offer.staffCost, offer.total - (offer.commonCost + offer.staffCost)]))

    const junTotal = offersMonthData && offersMonthData.find(price => price.month === 6) ? offersMonthData.find(price => price.month === 6).price : 0;
    const junCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 6) ? offersMonthCostData.find(price => price.month === 6).amount : 0;
    const junStaff = staffCostData && staffCostData.find(price => price.month === 6) ? staffCostData.find(price => price.month === 6).amount : 0;
    const julyTotal = offersMonthData && offersMonthData.find(price => price.month === 7) ? offersMonthData.find(price => price.month === 7).price : 0;
    const julyCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 7) ? offersMonthCostData.find(price => price.month === 7).amount : 0
    const julyStaff = staffCostData && staffCostData.find(price => price.month === 7) ? staffCostData.find(price => price.month === 7).amount : 0;
    const augTotal = offersMonthData && offersMonthData.find(price => price.month === 8) ? offersMonthData.find(price => price.month === 8).price : 0;
    const augCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 8) ? offersMonthCostData.find(price => price.month === 8).amount : 0
    const augStaff = staffCostData && staffCostData.find(price => price.month === 8) ? staffCostData.find(price => price.month === 8).amount : 0;
    const septTotal = offersMonthData && offersMonthData.find(price => price.month === 9) ? offersMonthData.find(price => price.month === 9).price : 0;
    const septCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 9) ? offersMonthCostData.find(price => price.month === 9).amount : 0
    const septStaff = staffCostData && staffCostData.find(price => price.month === 9) ? staffCostData.find(price => price.month === 9).amount : 0;
    const octTotal = offersMonthData && offersMonthData.find(price => price.month === 10) ? offersMonthData.find(price => price.month === 10).price : 0;
    const octCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 10) ? offersMonthCostData.find(price => price.month === 10).amount : 0
    const octStaff = staffCostData && staffCostData.find(price => price.month === 10) ? staffCostData.find(price => price.month === 10).amount : 0;
    const novTotal = offersMonthData && offersMonthData.find(price => price.month === 11) ? offersMonthData.find(price => price.month === 11).price : 0;
    const novCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 11) ? offersMonthCostData.find(price => price.month === 11).amount : 0
    const novStaff = staffCostData && staffCostData.find(price => price.month === 11) ? staffCostData.find(price => price.month === 11).amount : 0;
    const dicTotal = offersMonthData && offersMonthData.find(price => price.month === 12) ? offersMonthData.find(price => price.month === 12).price : 0;
    const dicCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 12) ? offersMonthCostData.find(price => price.month === 12).amount : 0
    const dicStaff = staffCostData && staffCostData.find(price => price.month === 12) ? staffCostData.find(price => price.month === 12).amount : 0;

    const junIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 6) ? ivaSupported.find(price => price.month === 6).amount : 0;
    const junIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 6) ? ivaRepercuted.find(price => price.month === 6).amount : 0;
    const julyIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 7) ? ivaSupported.find(price => price.month === 7).amount : 0;
    const julyIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 7) ? ivaRepercuted.find(price => price.month === 7).amount : 0;
    const augIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 8) ? ivaSupported.find(price => price.month === 8).amount : 0;
    const augIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 8) ? ivaRepercuted.find(price => price.month === 8).amount : 0;
    const septIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 9) ? ivaSupported.find(price => price.month === 9).amount : 0;
    const septIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 9) ? ivaRepercuted.find(price => price.month === 9).amount : 0;
    const octIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 10) ? ivaSupported.find(price => price.month === 10).amount : 0;
    const octIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 10) ? ivaRepercuted.find(price => price.month === 10).amount : 0;
    const novIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 11) ? ivaSupported.find(price => price.month === 11).amount : 0;
    const novIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 11) ? ivaRepercuted.find(price => price.month === 11).amount : 0;
    const dicIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 12) ? ivaSupported.find(price => price.month === 12).amount : 0;
    const dicIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 12) ? ivaRepercuted.find(price => price.month === 12).amount : 0;

    //Total Iva Paid on each months
    const junIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 6) ? ivaPaid.find(price => price.month === 6).amount : 0;
    const julyIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 7) ? ivaPaid.find(price => price.month === 7).amount : 0;
    const augIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 8) ? ivaPaid.find(price => price.month === 8).amount : 0;
    const septIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 9) ? ivaPaid.find(price => price.month === 9).amount : 0;
    const octIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 10) ? ivaPaid.find(price => price.month === 10).amount : 0;
    const novIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 11) ? ivaPaid.find(price => price.month === 6).amount : 0;
    const dicIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 12) ? ivaPaid.find(price => price.month === 12).amount : 0;

    const ivaAcu = [junIvaSupp + junIvaRep - junIvaPaid,
    junIvaSupp + junIvaRep - junIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid,
    junIvaSupp + junIvaRep - junIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + augIvaSupp + augIvaRep - augIvaPaid,
    junIvaSupp + junIvaRep - junIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + augIvaSupp + augIvaRep - augIvaPaid + septIvaSupp + septIvaRep - septIvaPaid,
    junIvaSupp + junIvaRep - junIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + augIvaSupp + augIvaRep - augIvaPaid + septIvaSupp + septIvaRep - septIvaPaid + octIvaSupp + octIvaRep - octIvaPaid,
    junIvaSupp + junIvaRep - junIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + augIvaSupp + augIvaRep - augIvaPaid + septIvaSupp + septIvaRep - septIvaPaid + octIvaSupp + octIvaRep - octIvaPaid + novIvaSupp + novIvaRep - novIvaPaid,
    junIvaSupp + junIvaRep - junIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + augIvaSupp + augIvaRep - augIvaPaid + septIvaSupp + septIvaRep - septIvaPaid + octIvaSupp + octIvaRep - octIvaPaid + novIvaSupp + novIvaRep - novIvaPaid + dicIvaSupp + dicIvaRep - dicIvaPaid]

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Gráficas</h1>
            </div>

            <div className="container">
                {(offersMonthData && offersMonthData.length > 0) || (offersMonthCostData && offersMonthCostData.length > 0) ?
                    <Chart
                        width={'100%'}
                        height={'550px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Mes', 'Total', 'Gastos Comunes', 'Gasto Personal', 'Ganancia'],
                            ["Junio", junTotal, junCost, junStaff, junTotal - junCost - junStaff],
                            ["Julio", julyTotal, julyCost, julyStaff, julyTotal - julyCost - julyStaff],
                            ["Agosto", augTotal, augCost, augStaff, augTotal - augCost - augStaff],
                            ["Septiembre", septTotal, septCost, septStaff, septTotal - septCost - septStaff],
                            ["Octubre", octTotal, octCost, octStaff, octTotal - octCost - octStaff],
                            ["Noviembre", novTotal, novCost, novStaff, novTotal - novCost - novStaff],
                            ["Diciembre", dicTotal, dicCost, dicStaff, dicTotal - dicCost - dicStaff],
                        ]}
                        options={{
                            chart: {
                                title: 'Tabla de Ganancias',
                                subtitle: 'Total, Gastos y diferencia del año 2021',
                            },
                        }}
                    />
                    : ""}
            </div>

            <div className="container">
                {(ivaSupported && ivaSupported.length > 0) || (ivaRepercuted && ivaRepercuted.length > 0) ?
                    <Chart
                        width={'100%'}
                        height={'550px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Mes', 'Soportado', 'Repercutido', 'Pago', 'Acumulado'],
                            ["Junio", junIvaSupp, junIvaRep, junIvaPaid, ivaAcu[0]],
                            ["Julio", julyIvaSupp, julyIvaRep, julyIvaPaid, ivaAcu[1]],
                            ["Agosto", augIvaSupp, augIvaRep, augIvaPaid, ivaAcu[2]],
                            ["Septiembre", septIvaSupp, septIvaRep, septIvaPaid, ivaAcu[3]],
                            ["Octubre", octIvaSupp, octIvaRep, octIvaPaid, ivaAcu[4]],
                            ["Noviembre", novIvaSupp, novIvaRep, novIvaPaid, ivaAcu[5]],
                            ["Diciembre", dicIvaSupp, dicIvaRep, dicIvaPaid, ivaAcu[6]],
                        ]}
                        options={{
                            chart: {
                                title: 'Tabla de IVA',
                                subtitle: 'IVA soportado, repercutido y acumulado año 2021',
                            },
                        }}
                    />
                    : ""}
            </div>

            <div className="container">
                {(offersRent && offersRent.length > 0) ?
                    <Chart
                        width={'100%'}
                        height={'550px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={rent}
                        options={{
                            chart: {
                                title: 'Rentabilidad',
                                subtitle: 'Rentabilidad de los Proyectos',
                            },
                        }}
                    />
                    : ""}
            </div>

        </main>
    )
}

export default Graphic
