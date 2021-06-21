import React from 'react'
import Chart from "react-google-charts";
import { useBringPriceIvaRepercuted, useBringPriceIvaSupported } from '../hooks/useBringIva';
import useBringMonthCostData from '../hooks/useBringMonthCostData';
import useBringMonthData from '../hooks/useBringMonthData';

const Graphic = () => {

    //Bring data from de db 
    const offersMonthData = useBringMonthData();
    const offersMonthCostData = useBringMonthCostData();
    const ivaSupported = useBringPriceIvaSupported();
    const ivaRepercuted = useBringPriceIvaRepercuted();

    return (
        <React.Fragment>
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
                                ['Mes', 'Total', 'Gastos', 'Ganancia'],
                                // ["Enero", offersMonthData.find(price => price.month === 1) ? offersMonthData.find(price => price.month === 1).price : 0,
                                //     offersMonthCostData.find(price => price.month === 1) ? offersMonthCostData.find(price => price.month === 1).amount : 0,
                                //     (offersMonthData.find(price => price.month === 1) ? offersMonthData.find(price => price.month === 1).price : 0) - (offersMonthCostData.find(price => price.month === 1) ? offersMonthCostData.find(price => price.month === 1).amount : 0)],
                                // ["Febrero", offersMonthData.find(price => price.month === 2) ? offersMonthData.find(price => price.month === 2).price : 0,
                                //     offersMonthCostData.find(price => price.month === 2) ? offersMonthCostData.find(price => price.month === 2).amount : 0,
                                //     (offersMonthData.find(price => price.month === 2) ? offersMonthData.find(price => price.month === 2).price : 0) - (offersMonthCostData.find(price => price.month === 2) ? offersMonthCostData.find(price => price.month === 2).amount : 0)],
                                // ["Marzo", offersMonthData.find(price => price.month === 3) ? offersMonthData.find(price => price.month === 3).price : 0,
                                //     offersMonthCostData.find(price => price.month === 3) ? offersMonthCostData.find(price => price.month === 3).amount : 0,
                                //     (offersMonthData.find(price => price.month === 3) ? offersMonthData.find(price => price.month === 3).price : 0) - (offersMonthCostData.find(price => price.month === 3) ? offersMonthCostData.find(price => price.month === 3).amount : 0)],
                                // ["Abril", offersMonthData.find(price => price.month === 4) ? offersMonthData.find(price => price.month === 4).price : 0,
                                //     offersMonthCostData.find(price => price.month === 4) ? offersMonthCostData.find(price => price.month === 4).amount : 0,
                                //     (offersMonthData.find(price => price.month === 4) ? offersMonthData.find(price => price.month === 4).price : 0) - (offersMonthCostData.find(price => price.month === 4) ? offersMonthCostData.find(price => price.month === 4).amount : 0)],
                                // ["Mayo", offersMonthData.find(price => price.month === 5) ? offersMonthData.find(price => price.month === 5).price : 0,
                                //     offersMonthCostData.find(price => price.month === 5) ? offersMonthCostData.find(price => price.month === 5).amount : 0,
                                //     (offersMonthData.find(price => price.month === 5) ? offersMonthData.find(price => price.month === 5).price : 0) - (offersMonthCostData.find(price => price.month === 5) ? offersMonthCostData.find(price => price.month === 5).amount : 0)],
                                ["Junio", offersMonthData && offersMonthData.find(price => price.month === 6) ? offersMonthData.find(price => price.month === 6).price : 0,
                                    offersMonthCostData && offersMonthCostData.find(price => price.month === 6) ? offersMonthCostData.find(price => price.month === 6).amount : 0,
                                    (offersMonthData && offersMonthData.find(price => price.month === 6) ? offersMonthData.find(price => price.month === 6).price : 0) - (offersMonthCostData && offersMonthCostData.find(price => price.month === 6) ? offersMonthCostData.find(price => price.month === 6).amount : 0)],
                                ["Julio", offersMonthData && offersMonthData.find(price => price.month === 7) ? offersMonthData.find(price => price.month === 7).price : 0,
                                    offersMonthCostData && offersMonthCostData.find(price => price.month === 7) ? offersMonthCostData.find(price => price.month === 7).amount : 0,
                                    (offersMonthData && offersMonthData.find(price => price.month === 7) ? offersMonthData.find(price => price.month === 7).price : 0) - (offersMonthCostData && offersMonthCostData.find(price => price.month === 7) ? offersMonthCostData.find(price => price.month === 7).amount : 0)],
                                ["Agosto", offersMonthData && offersMonthData.find(price => price.month === 8) ? offersMonthData.find(price => price.month === 8).price : 0,
                                    offersMonthCostData && offersMonthCostData.find(price => price.month === 8) ? offersMonthCostData.find(price => price.month === 8).amount : 0,
                                    (offersMonthData && offersMonthData.find(price => price.month === 8) ? offersMonthData.find(price => price.month === 8).price : 0) - (offersMonthCostData && offersMonthCostData.find(price => price.month === 8) ? offersMonthCostData.find(price => price.month === 8).amount : 0)],
                                ["Septiembre", offersMonthData && offersMonthData.find(price => price.month === 9) ? offersMonthData.find(price => price.month === 9).price : 0,
                                    offersMonthCostData && offersMonthCostData.find(price => price.month === 9) ? offersMonthCostData.find(price => price.month === 9).amount : 0,
                                    (offersMonthData && offersMonthData.find(price => price.month === 9) ? offersMonthData.find(price => price.month === 9).price : 0) - (offersMonthCostData && offersMonthCostData.find(price => price.month === 9) ? offersMonthCostData.find(price => price.month === 9).amount : 0)],
                                ["Octubre", offersMonthData && offersMonthData.find(price => price.month === 10) ? offersMonthData.find(price => price.month === 10).price : 0,
                                    offersMonthCostData && offersMonthCostData.find(price => price.month === 10) ? offersMonthCostData.find(price => price.month === 10).amount : 0,
                                    (offersMonthData && offersMonthData.find(price => price.month === 10) ? offersMonthData.find(price => price.month === 10).price : 0) - (offersMonthCostData && offersMonthCostData.find(price => price.month === 10) ? offersMonthCostData.find(price => price.month === 10).amount : 0)],
                                ["Noviembre", offersMonthData && offersMonthData.find(price => price.month === 11) ? offersMonthData.find(price => price.month === 11).price : 0,
                                    offersMonthCostData && offersMonthCostData.find(price => price.month === 11) ? offersMonthCostData.find(price => price.month === 11).amount : 0,
                                    (offersMonthData && offersMonthData.find(price => price.month === 11) ? offersMonthData.find(price => price.month === 11).price : 0) - (offersMonthCostData && offersMonthCostData.find(price => price.month === 11) ? offersMonthCostData.find(price => price.month === 11).amount : 0)],
                                ["Diciembre", offersMonthData && offersMonthData.find(price => price.month === 12) ? offersMonthData.find(price => price.month === 12).price : 0,
                                    offersMonthCostData && offersMonthCostData.find(price => price.month === 12) ? offersMonthCostData.find(price => price.month === 12).amount : 0,
                                    (offersMonthData && offersMonthData.find(price => price.month === 12) ? offersMonthData.find(price => price.month === 12).price : 0) - (offersMonthCostData && offersMonthCostData.find(price => price.month === 12) ? offersMonthCostData.find(price => price.month === 12).amount : 0)],
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
                                ['Mes', 'Soportado', 'Repercutido', 'Acumulado'],
                                // ["Enero", offersMonthData.find(price => price.month === 1) ? offersMonthData.find(price => price.month === 1).price : 0,
                                //     offersMonthCostData.find(price => price.month === 1) ? offersMonthCostData.find(price => price.month === 1).amount : 0,
                                //     (offersMonthData.find(price => price.month === 1) ? offersMonthData.find(price => price.month === 1).price : 0) - (offersMonthCostData.find(price => price.month === 1) ? offersMonthCostData.find(price => price.month === 1).amount : 0)],
                                // ["Febrero", offersMonthData.find(price => price.month === 2) ? offersMonthData.find(price => price.month === 2).price : 0,
                                //     offersMonthCostData.find(price => price.month === 2) ? offersMonthCostData.find(price => price.month === 2).amount : 0,
                                //     (offersMonthData.find(price => price.month === 2) ? offersMonthData.find(price => price.month === 2).price : 0) - (offersMonthCostData.find(price => price.month === 2) ? offersMonthCostData.find(price => price.month === 2).amount : 0)],
                                // ["Marzo", offersMonthData.find(price => price.month === 3) ? offersMonthData.find(price => price.month === 3).price : 0,
                                //     offersMonthCostData.find(price => price.month === 3) ? offersMonthCostData.find(price => price.month === 3).amount : 0,
                                //     (offersMonthData.find(price => price.month === 3) ? offersMonthData.find(price => price.month === 3).price : 0) - (offersMonthCostData.find(price => price.month === 3) ? offersMonthCostData.find(price => price.month === 3).amount : 0)],
                                // ["Abril", offersMonthData.find(price => price.month === 4) ? offersMonthData.find(price => price.month === 4).price : 0,
                                //     offersMonthCostData.find(price => price.month === 4) ? offersMonthCostData.find(price => price.month === 4).amount : 0,
                                //     (offersMonthData.find(price => price.month === 4) ? offersMonthData.find(price => price.month === 4).price : 0) - (offersMonthCostData.find(price => price.month === 4) ? offersMonthCostData.find(price => price.month === 4).amount : 0)],
                                // ["Mayo", offersMonthData.find(price => price.month === 5) ? offersMonthData.find(price => price.month === 5).price : 0,
                                //     offersMonthCostData.find(price => price.month === 5) ? offersMonthCostData.find(price => price.month === 5).amount : 0,
                                //     (offersMonthData.find(price => price.month === 5) ? offersMonthData.find(price => price.month === 5).price : 0) - (offersMonthCostData.find(price => price.month === 5) ? offersMonthCostData.find(price => price.month === 5).amount : 0)],
                                ["Junio", ivaSupported && ivaSupported.find(price => price.month === 6) ? ivaSupported.find(price => price.month === 6).amount : 0,
                                    ivaRepercuted && ivaRepercuted.find(price => price.month === 6) ? ivaRepercuted.find(price => price.month === 6).amount : 0,
                                    (ivaSupported && ivaSupported.find(price => price.month === 6) ? ivaSupported.find(price => price.month === 6).amount : 0) + (ivaRepercuted && ivaRepercuted.find(price => price.month === 6) ? ivaRepercuted.find(price => price.month === 6).amount : 0)],
                                ["Julio", ivaSupported && ivaSupported.find(price => price.month === 7) ? ivaSupported.find(price => price.month === 7).amount : 0,
                                    ivaRepercuted && ivaRepercuted.find(price => price.month === 7) ? ivaRepercuted.find(price => price.month === 7).amount : 0,
                                    (ivaSupported && ivaSupported.find(price => price.month === 7) ? ivaSupported.find(price => price.month === 7).amount : 0) - (ivaRepercuted && ivaRepercuted.find(price => price.month === 7) ? ivaRepercuted.find(price => price.month === 7).amount : 0)],
                                ["Agosto", ivaSupported && ivaSupported.find(price => price.month === 8) ? ivaSupported.find(price => price.month === 8).amount : 0,
                                    ivaRepercuted && ivaRepercuted.find(price => price.month === 8) ? ivaRepercuted.find(price => price.month === 8).amount : 0,
                                    (ivaSupported && ivaSupported.find(price => price.month === 8) ? ivaSupported.find(price => price.month === 8).amount : 0) - (ivaRepercuted && ivaRepercuted.find(price => price.month === 8) ? ivaRepercuted.find(price => price.month === 8).amount : 0)],
                                ["Septiembre", ivaSupported && ivaSupported.find(price => price.month === 9) ? ivaSupported.find(price => price.month === 9).amount : 0,
                                    ivaRepercuted && ivaRepercuted.find(price => price.month === 9) ? ivaRepercuted.find(price => price.month === 9).amount : 0,
                                    (ivaSupported && ivaSupported.find(price => price.month === 9) ? ivaSupported.find(price => price.month === 9).amount : 0) - (ivaRepercuted && ivaRepercuted.find(price => price.month === 9) ? ivaRepercuted.find(price => price.month === 9).amount : 0)],
                                ["Octubre", ivaSupported && ivaSupported.find(price => price.month === 10) ? ivaSupported.find(price => price.month === 10).amount : 0,
                                    ivaRepercuted && ivaRepercuted.find(price => price.month === 10) ? ivaRepercuted.find(price => price.month === 10).amount : 0,
                                    (ivaSupported && ivaSupported.find(price => price.month === 10) ? ivaSupported.find(price => price.month === 10).amount : 0) - (ivaRepercuted && ivaRepercuted.find(price => price.month === 10) ? ivaRepercuted.find(price => price.month === 10).amount : 0)],
                                ["Noviembre", ivaSupported && ivaSupported.find(price => price.month === 11) ? ivaSupported.find(price => price.month === 11).amount : 0,
                                    ivaRepercuted && ivaRepercuted.find(price => price.month === 11) ? ivaRepercuted.find(price => price.month === 11).amount : 0,
                                    (ivaSupported && ivaSupported.find(price => price.month === 11) ? ivaSupported.find(price => price.month === 11).amount : 0) - (ivaRepercuted && ivaRepercuted.find(price => price.month === 11) ? ivaRepercuted.find(price => price.month === 11).amount : 0)],
                                ["Diciembre", ivaSupported && ivaSupported.find(price => price.month === 12) ? ivaSupported.find(price => price.month === 12).amount : 0,
                                    ivaRepercuted && ivaRepercuted.find(price => price.month === 12) ? ivaRepercuted.find(price => price.month === 12).amount : 0,
                                    (ivaSupported && ivaSupported.find(price => price.month === 12) ? ivaSupported.find(price => price.month === 12).amount : 0) - (ivaRepercuted && ivaRepercuted.find(price => price.month === 12) ? ivaRepercuted.find(price => price.month === 12).amount : 0)],
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

            </main>
        </React.Fragment >
    )
}

export default Graphic
