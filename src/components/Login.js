import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { merkLogo } from '../const/Images'
import { login } from '../utils'
import { api } from '../const/Url'
import { useForm } from 'react-hook-form'


const Login = (props) => {

    const [redirect, setRedirect] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const { register, handleSubmit } = useForm();

    const submitLogin = async (data) => {

        const response = await fetch(api + "/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data)
        });

        var content = await response.json();

        if (content.message === "user not found" || content.message === "incorrect password") {
            setRedirect(false);
            setEmailError(true);
        } else {
            login();
            setEmailError(false);
            setRedirect(true);
            props.history.push('/dashboard/clients');
        }
    }

    if (redirect) { return <Redirect to="/dashboard/clients" />; }

    return (
        <div className="text-center bg-blue">
            <main className="form-signin">
                <form onSubmit={handleSubmit(submitLogin)}>
                    <img className="mb-4" src={merkLogo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            required
                            {...register("email")}
                        />
                        <label>Email address</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            {...register("password")}
                        />
                        <label>Password</label>
                    </div>

                    <div className="mb-2" style={{ color: 'red' }}>
                        {emailError ? 'El email o la contraseña son incorrectos' : ''}
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <Link to="/register" className="mt-2 w-100 btn btn-lg btn-outline-primary" type="submit">Register</Link>
                </form>
            </main>
        </div>
    )
}

export default Login
