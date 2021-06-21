import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoGraph } from 'react-icons/go'
import { FiUsers } from 'react-icons/fi'
import { MdLocalOffer } from 'react-icons/md'
import { FaMoneyBillWave } from 'react-icons/fa';
import { AiOutlinePercentage } from 'react-icons/ai';
import '../styles/Aside.css'

const Aside = () => {
    return (
        <React.Fragment>
            <nav className="d-block d-md-none bg-light">
                <div className="position-sticky pt-md-3">
                    <ul className="list-group list-group-horizontal justify-content-around">
                        <li className="nav-item list-group-item clean">
                            <NavLink to="/dashboard/clients" className="btn mt-2">{<FiUsers />} Clientes</NavLink>
                        </li>
                        <li className="nav-item list-group-item clean">
                            <NavLink to="/dashboard/offers" className="btn mt-2">{<MdLocalOffer />} Ofertas</NavLink>
                        </li>
                        <li className="nav-item list-group-item clean">
                            <NavLink to="/dashboard/costs" className="btn mt-2">{<FaMoneyBillWave />} Gastos</NavLink>
                        </li>
                        <li className="nav-item list-group-item clean">
                            <NavLink to="/dashboard/iva" className="btn mt-2">{<AiOutlinePercentage />} IVA</NavLink>
                        </li>
                        <li className="nav-item list-group-item clean">
                            <NavLink to="/dashboard/graphic" className="btn mt-2">{<GoGraph />} Gráficas</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="d-none d-md-block col-md-3 col-lg-2 bg-light sidebar mt-lg-3">
                <div className="position-sticky pt-md-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/dashboard/clients" className="btn mt-2">{<FiUsers />} Clientes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard/offers" className="btn mt-2">{<MdLocalOffer />} Ofertas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard/costs" className="btn mt-2">{<FaMoneyBillWave />} Gastos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard/iva" className="btn mt-2">{<AiOutlinePercentage />} IVA</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard/graphic" className="btn mt-2">{<GoGraph />} Gráficas</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Aside
