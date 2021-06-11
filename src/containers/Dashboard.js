import React, { useEffect } from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Aside from '../components/Aside';
import Clients from '../components/Clients';
import Graphic from '../components/Graphic';
import Header from '../components/Header';
import Offers from '../components/Offers';
import '../styles/Dashboard.css'
import { api } from '../const/Url'
import Cost from '../components/Cost';

const Dashboard = () => {

    useEffect(() => {
        (
            async () => {
                const response = await fetch(api + "/user", {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                await response.json();
            }
        )();
    }, [])

    return (
        <BrowserRouter>
            <div className="background">

                <Header />

                <div className="container-fluid">
                    <div className="row">
                        <Aside />
                        <Route path="/dashboard/clients" component={Clients} />
                        <Route path="/dashboard/offers" component={Offers} />
                        <Route path="/dashboard/graphic" component={Graphic} />
                        <Route path="/dashboard/costs" component={Cost} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dashboard
