import React, { useState } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { merkLogo } from '../const/Images'
import { api } from '../const/Url'

const Register = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submitRegistration = async (e) => {
        e.preventDefault();

        const response = await fetch(api + "/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        });

        // Check correct answer
        var content = await response.json();

        if (content.message === "The user already exits") {
            setRedirect(false);
            setEmailError(true);
        } else {
            setEmailError(false);
            setRedirect(true);
        }
    }

    if (redirect) { return <Redirect to="/" />; }

    return (
        <div className="text-center bg-blue">
            <main className="form-signin">
                <form onSubmit={submitRegistration}>
                    <img className="mb-4" src={merkLogo} alt="logo" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            required
                            onChange={e => setName(e.target.value)}
                        />
                        <label>Username</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Email address</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>

                    <div className="mb-2" style={{ color: 'red' }} >
                        {emailError ? 'El email ya existe' : ''}
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    <Link to="/" className="mt-2 w-100 btn btn-lg btn-outline-primary" type="submit">Back</Link>
                </form>
            </main>
        </div>
    )
}

export default Register
