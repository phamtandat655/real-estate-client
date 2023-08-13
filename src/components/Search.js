import React, { memo, useContext } from 'react';

import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { HouseContext } from './HouseContext';

const Search = () => {
    const { handleClick } = useContext(HouseContext);

    return (
        <div className="bg-white pb-5">
            <div className="max-w-5xl mx-auto lg:w-[1024px] shadow-md shadow-gray-400 flex justify-evenly items-center md:flex-row flex-col p-5 rounded-md">
                <div className="flex items-center lg:justify-evenly lg:flex-1 lg:flex-row flex-col">
                    <CountryDropdown />
                    <PropertyDropdown />
                    <PriceRangeDropdown />
                </div>
                <div>
                    <button
                        onClick={handleClick}
                        className="py-3 px-8 text-xl rounded-md bg-secondary text-white hover:text-violet-900"
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Search);
