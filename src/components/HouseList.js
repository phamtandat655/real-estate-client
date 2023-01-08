import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';

import { ImSpinner2 } from 'react-icons/im';

import House from './House';
import { Link } from 'react-router-dom';

const HouseList = () => {
    const { houses, loading } = useContext(HouseContext);

    if (houses.length < 1) {
        return <div className="text-center py-[50px]">Sorry , nothing found</div>;
    }

    return (
        <div className="container mx-auto py-[50px]">
            {loading ? (
                <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl" />
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-14">
                    {houses.map((house) => {
                        return (
                            <Link to={`/property/${house.id}`} key={house.id}>
                                <House house={house} />
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default HouseList;
