import React, { useContext, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { publicRoute } from './routes/routes';

import { Routes, Route } from 'react-router-dom';
import { useUserContext } from './context/UserContext';
import axios from 'axios';
import { HouseContext } from './components/HouseContext';

const App = () => {
    const { setAllUsers, setUser } = useUserContext();
    const { setAllHouses, setHouses } = useContext(HouseContext);

    useEffect(() => {
        axios.get('http://localhost:4000/user').then((users) => {
            setAllUsers(users.data);
        });

        const oldUser = JSON.parse(localStorage.getItem('user'));
        if (oldUser) {
            // kiem tra refresh con thoi han khong ? => neu con thi lam moi de duy tri dang nhap => khong thi bat dang nhap lai
            axios
                .post('http://localhost:5000/token', {
                    email: oldUser.email,
                    refreshToken: oldUser.refreshToken,
                })
                .then((res) => {
                    const oldUserWithNewRefreshToken = {
                        ...oldUser,
                        refreshToken: res.data.refreshToken,
                    };
                    setUser(oldUserWithNewRefreshToken);
                    localStorage.setItem('user', JSON.stringify(oldUserWithNewRefreshToken));

                    // get houses
                    if (res.data && res.data.accessToken) {
                        let reqInstance = axios.create({
                            headers: {
                                Authorization: `Bearer ${res.data.accessToken}`,
                            },
                        });
                        reqInstance.get('http://localhost:4000').then((res2) => {
                            setHouses(res2.data);
                            setAllHouses(res2.data);
                        });
                    }
                })
                .catch((err) => {
                    setUser(null);
                    localStorage.removeItem('user');
                });
        }
    }, []);

    return (
        <div className=" max-w-[1250px] mx-auto">
            <Routes>
                {publicRoute.map((route, index) => {
                    if (route?.layout) {
                        let Component = () => {
                            return (
                                <div>
                                    <Header />
                                    <route.component />
                                    <Footer />
                                </div>
                            );
                        };
                        return <Route path={route.path} element={<Component />} key={index} />;
                    } else {
                        return <Route path={route.path} element={<route.component />} key={index} />;
                    }
                })}
            </Routes>
        </div>
    );
};

export default App;
