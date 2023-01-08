import React from 'react';

const House = ({ house }) => {
    return (
        <div className="mt-4 mb-8 w-full max-w-[352px] mx-auto shadow-md shadow-gray-400 hover:shadow-2xl hover:-translate-y-1 cursor-pointer rounded-sm">
            <div className="p-2">
                <img src={house.image} alt="house" />
            </div>
            <div>
                <div className="pb-1">
                    <span className="mx-3 text-xs bg-cyan-300 text-white px-1 rounded-full">{house.type}</span>
                    <span className="text-xs bg-secondary text-white px-1 rounded-full">{house.country}</span>
                </div>
                <div>
                    <h3 className="text-lg px-3 max-w-[260px] font-semibold mb-1">{house.address}</h3>
                </div>
                <div className="px-4">
                    <span className="mr-2">
                        <i className="fa-solid fa-bed"></i> {house.bedrooms}
                    </span>
                    <span className="mx-2">
                        <i className="fa-solid fa-bath"></i> {house.bathrooms}
                    </span>
                    <span className="mx-2">
                        <i className="fa-solid fa-arrows-up-down-left-right"></i> {house.surface}
                    </span>
                </div>
                <div>
                    <p className="mb-1 p-3 text-lg font-semibold text-secondary">${house.price}</p>
                </div>
            </div>
        </div>
    );
};

export default House;
