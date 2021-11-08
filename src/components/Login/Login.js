import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSign } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import icon from '../../image/unnamed (1).png'
import useFirebase from '../../useFirebase/useFirebase';

const google = <FontAwesomeIcon icon={faGoogle} />
const singIn = <FontAwesomeIcon icon={faSign} />

const Login = () => {
    const { googleSingIn } = useFirebase()
    return (
        <div className="flex justify-center align-center  mt-36 m-96 rounded-md shadow-inner border-2">
            <div className=" ">

                <h3 className="mb-10 text-3xl text-uppercase ">Please google sing in  </h3>


                <button onClick={googleSingIn} className="mt-3 mb-3 text-3xl   w-full text-center p-2  shadow-inner  justify-center rounded-md hover:bg-green-600 border-red-400   hover:text-white flex align-center" > <img className="w-8 rounded-md mr-5" src={icon} alt="" /> Sing in With google</button>
            </div>

        </div>

    );
};

export default Login;