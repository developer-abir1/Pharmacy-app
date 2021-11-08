import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useFirebase from '../../../useFirebase/useFirebase';

const element = <FontAwesomeIcon icon={faShoppingCart} />
const Navbar = () => {



    // firebase 
    const { user, googleSingInOut, googleSingIn } = useFirebase()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/">     <a className="navbar-brand" >Navbar</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        {user.email && <a className="nav-link" href="#">{user?.displayName}</a>}

                        {user.email ? <button className="text-xl p-2 bg-red-300 font-bold rounded-md hover:text-white" onClick={googleSingInOut}>Logout</button> : <button className="text-xl p-2 bg-green-300 font-bold rounded-md hover:text-white" onClick={googleSingIn}>Login</button>}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;