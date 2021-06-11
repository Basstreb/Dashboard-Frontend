import React from 'react'
import Chart from "react-google-charts";
import useBringMonthCostData from '../hooks/useBringMonthCostData';
import useBringMonthData from '../hooks/useBringMonthData';

const Graphic = () => {

    const offersMonthData = useBringMonthData();
    const offersMonthCostData = useBringMonthCostData();

    return (
        <React.Fragment>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Gráficas</h1>
                </div>
                <div className="container">
                    {offersMonthData && offersMonthData.length > 0 ?
                        <Chart
                            width={'100%'}
                            height={'550px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Mes', 'Total', 'Gastos', 'Ganancia'],
                                // ["Enero", offersMonthData.find(price => price.month === 1) ? offersMonthData.find(price => price.month === 1).price : 0],
                                // ["Febrero", offersMonthData.find(price => price.month === 2) ? offersMonthData.find(price => price.month === 2).price : 0],
                                // ["Marzo", offersMonthData.find(price => price.month === 3) ? offersMonthData.find(price => price.month === 3).price : 0],
                                // ["Abril", offersMonthData.find(price => price.month === 4) ? offersMonthData.find(price => price.month === 4).price : 0],
                                // ["Mayo", offersMonthData.find(price => price.month === 5) ? offersMonthData.find(price => price.month === 5).price : 0],
                                ["Junio", offersMonthData.find(price => price.month === 6) ? offersMonthData.find(price => price.month === 6).price : 0,
                                    offersMonthCostData.find(price => price.month === 6) ? offersMonthCostData.find(price => price.month === 6).amount : 0,
                                    (offersMonthData.find(price => price.month === 6) ? offersMonthData.find(price => price.month === 6).price : 0) - (offersMonthCostData.find(price => price.month === 6) ? offersMonthCostData.find(price => price.month === 6).amount : 0)],
                                ["Julio", offersMonthData.find(price => price.month === 7) ? offersMonthData.find(price => price.month === 7).price : 0,
                                    offersMonthCostData.find(price => price.month === 7) ? offersMonthCostData.find(price => price.month === 7).amount : 0,
                                    (offersMonthData.find(price => price.month === 7) ? offersMonthData.find(price => price.month === 7).price : 0) - (offersMonthCostData.find(price => price.month === 7) ? offersMonthCostData.find(price => price.month === 7).amount : 0)],
                                ["Agosto", offersMonthData.find(price => price.month === 8) ? offersMonthData.find(price => price.month === 8).price : 0,
                                    offersMonthCostData.find(price => price.month === 8) ? offersMonthCostData.find(price => price.month === 8).amount : 0,
                                    (offersMonthData.find(price => price.month === 8) ? offersMonthData.find(price => price.month === 8).price : 0) - (offersMonthCostData.find(price => price.month === 8) ? offersMonthCostData.find(price => price.month === 8).amount : 0)],
                                ["Septiembre", offersMonthData.find(price => price.month === 9) ? offersMonthData.find(price => price.month === 9).price : 0,
                                    offersMonthCostData.find(price => price.month === 9) ? offersMonthCostData.find(price => price.month === 9).amount : 0,
                                    (offersMonthData.find(price => price.month === 9) ? offersMonthData.find(price => price.month === 9).price : 0) - (offersMonthCostData.find(price => price.month === 9) ? offersMonthCostData.find(price => price.month === 9).amount : 0)],
                                ["Octubre", offersMonthData.find(price => price.month === 10) ? offersMonthData.find(price => price.month === 10).price : 0,
                                    offersMonthCostData.find(price => price.month === 10) ? offersMonthCostData.find(price => price.month === 10).amount : 0,
                                    (offersMonthData.find(price => price.month === 10) ? offersMonthData.find(price => price.month === 10).price : 0) - (offersMonthCostData.find(price => price.month === 10) ? offersMonthCostData.find(price => price.month === 10).amount : 0)],
                                ["Noviembre", offersMonthData.find(price => price.month === 11) ? offersMonthData.find(price => price.month === 11).price : 0,
                                    offersMonthCostData.find(price => price.month === 11) ? offersMonthCostData.find(price => price.month === 11).amount : 0,
                                    (offersMonthData.find(price => price.month === 11) ? offersMonthData.find(price => price.month === 11).price : 0) - (offersMonthCostData.find(price => price.month === 11) ? offersMonthCostData.find(price => price.month === 11).amount : 0)],
                                ["Diciembre", offersMonthData.find(price => price.month === 12) ? offersMonthData.find(price => price.month === 12).price : 0,
                                    offersMonthCostData.find(price => price.month === 12) ? offersMonthCostData.find(price => price.month === 12).amount : 0,
                                    (offersMonthData.find(price => price.month === 12) ? offersMonthData.find(price => price.month === 12).price : 0) - (offersMonthCostData.find(price => price.month === 12) ? offersMonthCostData.find(price => price.month === 12).amount : 0)],
                            ]}
                            options={{
                                title: 'Gastos y Ganancias Totales del 2021',
                                chartArea: { width: '75%' },
                                hAxis: {
                                    title: 'Total',
                                },
                                vAxis: {
                                    title: 'Mes',
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                        : ""}
                </div>
                <div className="container">
                    {offersMonthData && offersMonthData.length > 0 ?
                        <Chart
                            width={'100%'}
                            height={'550px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Mes', 'Total', 'Gastos', 'Ganancia'],
                                ["Junio", offersMonthData.find(price => price.month === 6) ? offersMonthData.find(price => price.month === 6).price : 0, 5000, 2000],
                                ["Julio", offersMonthData.find(price => price.month === 7) ? offersMonthData.find(price => price.month === 7).price : 0, 5000, 2000],
                                ["Agosto", offersMonthData.find(price => price.month === 8) ? offersMonthData.find(price => price.month === 8).price : 0, 5000, 2000],
                                ["Septiembre", offersMonthData.find(price => price.month === 9) ? offersMonthData.find(price => price.month === 9).price : 0, 5000, 2000],
                                ["Octubre", offersMonthData.find(price => price.month === 10) ? offersMonthData.find(price => price.month === 10).price : 0, 5000, 2000],
                                ["Noviembre", offersMonthData.find(price => price.month === 11) ? offersMonthData.find(price => price.month === 11).price : 0, 5000, 2000],
                                ["Diciembre", offersMonthData.find(price => price.month === 12) ? offersMonthData.find(price => price.month === 12).price : 0, 5000, 2000],
                            ]}
                            options={{
                                title: 'Gastos y Ganancias Parciales del 2021',
                                chartArea: { width: '75%' },
                                hAxis: {
                                    title: 'Total',
                                },
                                vAxis: {
                                    title: 'Mes',
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                        : ""}
                </div>
            </main>
        </React.Fragment >
    )
}

export default Graphic
