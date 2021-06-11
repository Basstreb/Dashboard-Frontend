import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { api } from '../../const/Url'
import axios from 'axios'


const ModalStaffCost = props => {

    const [check, setCheck] = useState(false);
    const [id, setId] = useState();

    const { register, handleSubmit, setValue } = useForm();

    const submitStaffCost = (data) => {

        console.log(data);

        axios.post(api + "/create_staff",
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

        props.onClose();
    }

    const submitUpdateStaffCost = (data) => {
        const staffName = data.staffName;
        const amount = data.amount;
        const cost = data.cost;
        const socialInsurances = data.socialInsurances;
        const project1 = data.project1;
        const project2 = data.project2;
        const project3 = data.project3;
        const project4 = data.project4;
        const payDate = data.payDate;

        axios.post(api + "/update_staff",
            JSON.stringify({
                id,
                staffName,
                amount,
                cost,
                socialInsurances,
                project1,
                project2,
                project3,
                project4,
                payDate
            }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).catch(function (error) {
            console.log(error);
        }).then(function () {
            window.location.reload(false);
        });

        props.onClose();
    }

    const formatDate = (string) => {
        const newDate = string.split("T", 1)
        return newDate
    }

    useEffect(() => {
        if (props.staff) {
            setCheck(true)
            setValue("staffName", props.staff.staffName)
            setValue("amount", String(props.staff.amount))
            setValue("cost", String(props.staff.cost))
            setValue("socialInsurances", String(props.staff.socialInsurances))
            setValue("project1", props.staff.project1)
            setValue("project2", props.staff.project2)
            setValue("project3", props.staff.project3)
            setValue("project4", props.staff.project4)
            setValue("payDate", formatDate(props.staff.payDate)[0])
            setId(String(props.staff.id))
        } else {
            setCheck(false)
            setId('')
        }
    }, [props.staff, setValue])


    return (
        <React.Fragment>
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>

                    <div className="modal-header">
                        <h4 className="modal-title">Añadir Cliente</h4>
                    </div>

                    <form id="cost2" onSubmit={check ? handleSubmit(submitUpdateStaffCost) : handleSubmit(submitStaffCost)}>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Empleado</label>
                                <div className="col">
                                    <input type="text" className="form-control" required  {...register("staffName")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Importe</label>
                                <div className="col">
                                    <input type="number" className="form-control" required  {...register("amount")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Coste</label>
                                <div className="col">
                                    <input type="number" className="form-control" required {...register("cost")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Valor SS</label>
                                <div className="col">
                                    <input type="number" className="form-control" required {...register("socialInsurances")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Proyecto 1</label>
                                <div className="col">
                                    <input type="text" className="form-control"  {...register("project1")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Proyecto 2</label>
                                <div className="col">
                                    <input type="text" className="form-control"  {...register("project2")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Proyecto 3</label>
                                <div className="col">
                                    <input type="text" className="form-control"  {...register("project3")} />
                                </div>
                                <label className="col-sm-2 col-form-label">Proyecto 4</label>
                                <div className="col">
                                    <input type="text" className="form-control"  {...register("project4")} />
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="col-sm-2 col-form-label">Mes Nom.</label>
                                <div className="col">
                                    <input type="date" className="form-control" required min="2021-01-01" max="2021-12-31" {...register("payDate")} />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="submit" className="btn btn-primary">Añadir</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalStaffCost
