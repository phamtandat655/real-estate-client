import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconAddHouse from '../assets/addHouseIcon.png';

import logo from '../assets/img/logo.svg';
import { HouseContext } from './HouseContext';
import { useUserContext } from '../context/UserContext';
import axios from 'axios';

const Header = () => {
    const { handleResetSearch } = useContext(HouseContext);
    const { user, setUser } = useUserContext();
    const nav = useNavigate();

    const handleClickAddHouseIcon = (e) => {
        if (user) {
            nav('/property/create');
        } else {
            nav('/login');
        }
    };

    const handleLogout = async () => {
        let requestToGetNewToken = await axios.post('http://localhost:5000/token', {
            email: user.email,
            refreshToken: user.refreshToken,
        });

        let reqInstance = axios.create({
            headers: {
                Authorization: `Bearer ${requestToGetNewToken.data.accessToken}`,
            },
        });
        await reqInstance.delete('http://localhost:5000/logout');
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <div className="flex items-center justify-between p-7 bg-white border-b-2 border-gray-300 border-solid">
            <div>
                <Link to="/" onClick={handleResetSearch}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="mr-5 flex items-center">
                {user ? (
                    <div className="mr-5 flex items-center">
                        <button onClick={handleClickAddHouseIcon}>
                            <img className="w-7 h-7 mr-4" src={iconAddHouse} alt="icon add house" />
                        </button>
                        <button onClick={handleLogout} className="p-2 hover:text-secondary">
                            Log out
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link to="/login">
                            <button className="p-2 hover:text-secondary">Log in</button>
                        </Link>
                        <Link to="/register">
                            <button className="p-2 rounded-md mx-5 bg-secondary text-white hover:text-violet-900">
                                Sign up
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
