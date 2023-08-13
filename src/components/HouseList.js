import React, { useContext, useState } from 'react';
import { HouseContext } from './HouseContext';

import { ImSpinner2 } from 'react-icons/im';

import House from './House';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import { useUserContext } from '../context/UserContext';

const HouseList = () => {
    const { houses, loading } = useContext(HouseContext);
    const { user } = useUserContext();
    const [pageIndex, setPageIndex] = useState(1);
    const nav = useNavigate();

    const handleClickHouse = (house) => {
        if (user) {
            if (house?._id) nav(`/property/${house._id}`);
            else nav('/');
        } else {
            alert('Please login to explore this house !');
            nav('/login');
        }
    };

    if (!user) {
        return (
            <div className="text-2xl text-center py-[50px]">
                Please{' '}
                <Link to="/login" className="text-violet-700 underline">
                    login
                </Link>{' '}
                to view the houses
            </div>
        );
    }

    if (houses.length < 1 || !houses) {
        return <div className="text-2xl text-center py-[50px]">Sorry , nothing found</div>;
    }

    return (
        <div className="container mx-auto py-[50px]">
            {loading ? (
                <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl" />
            ) : (
                <div className="w-full flex flex-col items-center">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-14">
                        {houses.map((house, index) => {
                            if (index >= pageIndex * 6 || index < pageIndex * 6 - 6)
                                return <React.Fragment key={index}></React.Fragment>;
                            return (
                                <div onClick={(e) => handleClickHouse(house)} key={index}>
                                    <House house={house} key={index} />
                                </div>
                            );
                        })}
                    </div>
                    <Pagination
                        pageIndex={pageIndex}
                        setPageIndex={setPageIndex}
                        totalPage={Math.ceil(houses?.length / 6)}
                    />
                </div>
            )}
        </div>
    );
};

export default HouseList;
