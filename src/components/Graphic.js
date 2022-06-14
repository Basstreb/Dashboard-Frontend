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
    const staffCostData = useBringStaffData();
    const ivaSupported = useBringPriceIvaSupported();
    const ivaRepercuted = useBringPriceIvaRepercuted();
    const ivaPaid = useBringIvaPaidPrice();
    const offersRent = useBringRent();

    console.log(ivaSupported);

    const rent = [["Proyecto", "Presupuesto", "Gasto", "Rentabilidad"]]

    offersRent && offersRent.map(offer => rent.push([offer.offerName, offer.total, offer.commonCost + offer.staffCost, offer.total - (offer.commonCost + offer.staffCost)]))

    //BEGINNING OF PROFIT VARIABLES
    const janTotal = offersMonthData && offersMonthData.find(price => price.month === 1) ? offersMonthData.find(price => price.month === 1).price : 0;
    const febTotal = offersMonthData && offersMonthData.find(price => price.month === 2) ? offersMonthData.find(price => price.month === 2).price : 0;
    const marTotal = offersMonthData && offersMonthData.find(price => price.month === 3) ? offersMonthData.find(price => price.month === 3).price : 0;
    const aprTotal = offersMonthData && offersMonthData.find(price => price.month === 4) ? offersMonthData.find(price => price.month === 4).price : 0;
    const mayTotal = offersMonthData && offersMonthData.find(price => price.month === 5) ? offersMonthData.find(price => price.month === 5).price : 0;
    const junTotal = offersMonthData && offersMonthData.find(price => price.month === 6) ? offersMonthData.find(price => price.month === 6).price : 0;
    const julyTotal = offersMonthData && offersMonthData.find(price => price.month === 7) ? offersMonthData.find(price => price.month === 7).price : 0;
    const augTotal = offersMonthData && offersMonthData.find(price => price.month === 8) ? offersMonthData.find(price => price.month === 8).price : 0;
    const septTotal = offersMonthData && offersMonthData.find(price => price.month === 9) ? offersMonthData.find(price => price.month === 9).price : 0;
    const octTotal = offersMonthData && offersMonthData.find(price => price.month === 10) ? offersMonthData.find(price => price.month === 10).price : 0;
    const novTotal = offersMonthData && offersMonthData.find(price => price.month === 11) ? offersMonthData.find(price => price.month === 11).price : 0;
    const dicTotal = offersMonthData && offersMonthData.find(price => price.month === 12) ? offersMonthData.find(price => price.month === 12).price : 0;

    const janCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 1) ? offersMonthCostData.find(price => price.month === 1).amount : 0;
    const febCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 2) ? offersMonthCostData.find(price => price.month === 2).amount : 0;
    const marCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 3) ? offersMonthCostData.find(price => price.month === 3).amount : 0;
    const aprCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 4) ? offersMonthCostData.find(price => price.month === 4).amount : 0;
    const mayCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 5) ? offersMonthCostData.find(price => price.month === 5).amount : 0;
    const junCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 6) ? offersMonthCostData.find(price => price.month === 6).amount : 0;
    const julyCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 7) ? offersMonthCostData.find(price => price.month === 7).amount : 0;
    const augCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 8) ? offersMonthCostData.find(price => price.month === 8).amount : 0;
    const septCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 9) ? offersMonthCostData.find(price => price.month === 9).amount : 0;
    const octCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 10) ? offersMonthCostData.find(price => price.month === 10).amount : 0;
    const novCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 11) ? offersMonthCostData.find(price => price.month === 11).amount : 0
    const dicCost = offersMonthCostData && offersMonthCostData.find(price => price.month === 12) ? offersMonthCostData.find(price => price.month === 12).amount : 0;

    const janStaff = staffCostData && staffCostData.find(price => price.month === 1) ? staffCostData.find(price => price.month === 1).amount : 0;
    const febStaff = staffCostData && staffCostData.find(price => price.month === 2) ? staffCostData.find(price => price.month === 2).amount : 0;
    const marStaff = staffCostData && staffCostData.find(price => price.month === 3) ? staffCostData.find(price => price.month === 3).amount : 0;
    const aprStaff = staffCostData && staffCostData.find(price => price.month === 4) ? staffCostData.find(price => price.month === 4).amount : 0;
    const mayStaff = staffCostData && staffCostData.find(price => price.month === 5) ? staffCostData.find(price => price.month === 5).amount : 0;
    const junStaff = staffCostData && staffCostData.find(price => price.month === 6) ? staffCostData.find(price => price.month === 6).amount : 0;
    const julyStaff = staffCostData && staffCostData.find(price => price.month === 7) ? staffCostData.find(price => price.month === 7).amount : 0;
    const augStaff = staffCostData && staffCostData.find(price => price.month === 8) ? staffCostData.find(price => price.month === 8).amount : 0;
    const septStaff = staffCostData && staffCostData.find(price => price.month === 9) ? staffCostData.find(price => price.month === 9).amount : 0;
    const octStaff = staffCostData && staffCostData.find(price => price.month === 10) ? staffCostData.find(price => price.month === 10).amount : 0;
    const novStaff = staffCostData && staffCostData.find(price => price.month === 11) ? staffCostData.find(price => price.month === 11).amount : 0;
    const dicStaff = staffCostData && staffCostData.find(price => price.month === 12) ? staffCostData.find(price => price.month === 12).amount : 0;
    //END OF PROFIT VARIABLES

    //START OF IVA VARIABLES
    const janIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 1) ? ivaSupported.find(price => price.month === 1).amount : 0;
    const febIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 2) ? ivaSupported.find(price => price.month === 2).amount : 0;
    const marIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 3) ? ivaSupported.find(price => price.month === 3).amount : 0;
    const aprIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 4) ? ivaSupported.find(price => price.month === 4).amount : 0;
    const mayIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 5) ? ivaSupported.find(price => price.month === 5).amount : 0;
    const junIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 6) ? ivaSupported.find(price => price.month === 6).amount : 0;
    const julyIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 7) ? ivaSupported.find(price => price.month === 7).amount : 0;
    const augIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 8) ? ivaSupported.find(price => price.month === 8).amount : 0;
    const septIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 9) ? ivaSupported.find(price => price.month === 9).amount : 0;
    const octIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 10) ? ivaSupported.find(price => price.month === 10).amount : 0;
    const novIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 11) ? ivaSupported.find(price => price.month === 11).amount : 0;
    const dicIvaSupp = ivaSupported && ivaSupported.find(price => price.month === 12) ? ivaSupported.find(price => price.month === 12).amount : 0;

    const janIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 1) ? ivaRepercuted.find(price => price.month === 1).amount : 0;
    const febIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 2) ? ivaRepercuted.find(price => price.month === 2).amount : 0;
    const marIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 3) ? ivaRepercuted.find(price => price.month === 3).amount : 0;
    const aprIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 4) ? ivaRepercuted.find(price => price.month === 4).amount : 0;
    const mayIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 5) ? ivaRepercuted.find(price => price.month === 5).amount : 0;
    const junIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 6) ? ivaRepercuted.find(price => price.month === 6).amount : 0;
    const julyIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 7) ? ivaRepercuted.find(price => price.month === 7).amount : 0;
    const augIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 8) ? ivaRepercuted.find(price => price.month === 8).amount : 0;
    const septIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 9) ? ivaRepercuted.find(price => price.month === 9).amount : 0;
    const octIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 10) ? ivaRepercuted.find(price => price.month === 10).amount : 0;
    const novIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 11) ? ivaRepercuted.find(price => price.month === 11).amount : 0;
    const dicIvaRep = ivaRepercuted && ivaRepercuted.find(price => price.month === 12) ? ivaRepercuted.find(price => price.month === 12).amount : 0;

    //Total Iva Paid on each months
    const janIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 1) ? ivaPaid.find(price => price.month === 1).amount : 0;
    const febIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 2) ? ivaPaid.find(price => price.month === 2).amount : 0;
    const marIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 3) ? ivaPaid.find(price => price.month === 3).amount : 0;
    const aprIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 4) ? ivaPaid.find(price => price.month === 4).amount : 0;
    const mayIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 5) ? ivaPaid.find(price => price.month === 5).amount : 0;
    const junIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 6) ? ivaPaid.find(price => price.month === 6).amount : 0;
    const julyIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 7) ? ivaPaid.find(price => price.month === 7).amount : 0;
    const augIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 8) ? ivaPaid.find(price => price.month === 8).amount : 0;
    const septIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 9) ? ivaPaid.find(price => price.month === 9).amount : 0;
    const octIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 10) ? ivaPaid.find(price => price.month === 10).amount : 0;
    const novIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 11) ? ivaPaid.find(price => price.month === 6).amount : 0;
    const dicIvaPaid = ivaPaid && ivaPaid.find(price => price.month === 12) ? ivaPaid.find(price => price.month === 12).amount : 0;

    const ivaAcu = [
        janIvaSupp + janIvaRep - janIvaPaid,
        febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        mayIvaSupp + mayIvaRep - mayIvaPaid + aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        junIvaSupp + junIvaRep - junIvaPaid + mayIvaSupp + mayIvaRep - mayIvaPaid + aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        julyIvaSupp + julyIvaRep - julyIvaPaid + junIvaSupp + junIvaRep - junIvaPaid + mayIvaSupp + mayIvaRep - mayIvaPaid + aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        augIvaSupp + augIvaRep - augIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + junIvaSupp + junIvaRep - junIvaPaid + mayIvaSupp + mayIvaRep - mayIvaPaid + aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        septIvaSupp + septIvaRep - septIvaPaid + augIvaSupp + augIvaRep - augIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + junIvaSupp + junIvaRep - junIvaPaid + mayIvaSupp + mayIvaRep - mayIvaPaid + aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        octIvaSupp + octIvaRep - octIvaPaid + septIvaSupp + septIvaRep - septIvaPaid + augIvaSupp + augIvaRep - augIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + junIvaSupp + junIvaRep - junIvaPaid + mayIvaSupp + mayIvaRep - mayIvaPaid + aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        novIvaSupp + novIvaRep - novIvaPaid + octIvaSupp + octIvaRep - octIvaPaid + septIvaSupp + septIvaRep - septIvaPaid + augIvaSupp + augIvaRep - augIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + junIvaSupp + junIvaRep - junIvaPaid + mayIvaSupp + mayIvaRep - mayIvaPaid + aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid,
        dicIvaSupp + dicIvaRep - dicIvaPaid + novIvaSupp + novIvaRep - novIvaPaid + octIvaSupp + octIvaRep - octIvaPaid + septIvaSupp + septIvaRep - septIvaPaid + augIvaSupp + augIvaRep - augIvaPaid + julyIvaSupp + julyIvaRep - julyIvaPaid + junIvaSupp + junIvaRep - junIvaPaid + mayIvaSupp + mayIvaRep - mayIvaPaid + aprIvaSupp + aprIvaRep - aprIvaPaid + marIvaSupp + marIvaRep - marIvaPaid + febIvaSupp + febIvaRep - febIvaPaid + janIvaSupp + janIvaRep - janIvaPaid
    ]

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
                            ['Enero', janTotal, janCost, janStaff, janTotal - janCost - janStaff],
                            ['Febrero', febTotal, febCost, febStaff, febTotal - febCost - febStaff],
                            ['Marzo', marTotal, marCost, marStaff, marTotal - marCost - marStaff],
                            ['Abril', aprTotal, aprCost, aprStaff, aprTotal - aprCost - aprStaff],
                            ['Mayo', mayTotal, mayCost, mayStaff, mayTotal - mayCost - mayStaff],
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
                            ['Enero', janIvaSupp, janIvaRep, janIvaPaid, ivaAcu[0]],
                            ['Febrero', febIvaSupp, febIvaRep, febIvaPaid, ivaAcu[1]],
                            ['Marzo', marIvaSupp, marIvaRep, marIvaPaid, ivaAcu[2]],
                            ['Abril', aprIvaSupp, aprIvaRep, aprIvaPaid, ivaAcu[3]],
                            ['Mayo', mayIvaSupp, mayIvaRep, mayIvaPaid, ivaAcu[4]],
                            ["Junio", junIvaSupp, junIvaRep, junIvaPaid, ivaAcu[5]],
                            ["Julio", julyIvaSupp, julyIvaRep, julyIvaPaid, ivaAcu[6]],
                            ["Agosto", augIvaSupp, augIvaRep, augIvaPaid, ivaAcu[7]],
                            ["Septiembre", septIvaSupp, septIvaRep, septIvaPaid, ivaAcu[8]],
                            ["Octubre", octIvaSupp, octIvaRep, octIvaPaid, ivaAcu[9]],
                            ["Noviembre", novIvaSupp, novIvaRep, novIvaPaid, ivaAcu[10]],
                            ["Diciembre", dicIvaSupp, dicIvaRep, dicIvaPaid, ivaAcu[11]],
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
