import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const SignIn = () => {
    const [error, setError] = useState('');
    const { signIn, googleSign, githubSign } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handlSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                console.log(user)
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handlGoogle = () => {
        googleSign(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handlGithub = () => {
        githubSign(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please SignIn now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered shadow-inner" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <br />
                                <Link to='/register'>Please Register Now ?</Link>
                            </div>
                            {error}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignIn</button>
                            </div>
                            <button onClick={handlGoogle} className="btn btn-outline btn-info">SignIn With Google</button>
                            <button onClick={handlGithub} className="btn btn-outline btn-info">SignIn With Github</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;