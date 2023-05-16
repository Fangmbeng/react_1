import React from 'react';

export default function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">{props.usernme}Dashboard</a>
                            <a className="nav-link" href="/">LogIn</a>
                            <a className="nav-link" href="/">Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
