import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

const Header = () => {
    return (
        <div className="flex items-center justify-between p-7 bg-white border-b-2 border-gray-300 border-solid">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="mr-5">
                <button className="p-2 hover:text-secondary">Log in</button>
                <button className="p-2 rounded-md mx-5 bg-secondary text-white hover:text-violet-900">Sign up</button>
            </div>
        </div>
    );
};

export default Header;
