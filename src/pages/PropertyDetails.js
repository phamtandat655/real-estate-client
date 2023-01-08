import React from 'react';
import { useParams } from 'react-router-dom';
import { housesData } from '../data';

const PropertyDetails = () => {
    const { id } = useParams();

    const house = housesData.find((house) => house.id === parseInt(id));

    return (
        <div className="grid md:grid-cols-3 md:px-20 bg-white pb-10 p-3">
            <div className="md:col-span-2">
                <div className="flex justify-between items-center my-2">
                    <div>
                        <h3 className="font-semibold">{house.name}</h3>
                        <p>{house.address}</p>
                    </div>
                    <div>
                        <span className="mx-3 text-xs bg-cyan-300 text-white px-1 rounded-full">{house.type}</span>
                        <span className="text-xs bg-secondary text-white px-1 rounded-full">{house.country}</span>
                    </div>
                </div>

                <div>
                    <img className="rounded-md" src={house.imageLg} alt="img large" />
                </div>
                <div className="mt-4 mb-2">
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
                    <p>{house.description}</p>
                </div>
            </div>
            <div className="md:col-span-1 w-full md:mx-6">
                <div className="text-right md:mr-10">
                    <p className="mb-1 p-3 text-2xl font-semibold text-secondary">${house.price}</p>
                </div>
                <div className="px-3 py-5 border">
                    <input className="w-full px-2 py-4 border my-2 outline-none" type="text" placeholder="Name" />
                    <input className="w-full px-2 py-4 border my-2 outline-none" type="text" placeholder="Email" />
                    <input className="w-full px-2 py-4 border my-2 outline-none" type="text" placeholder="Phone" />
                    <input className="w-full px-2 py-4 border my-2 outline-none" type="text" placeholder="Note" />
                    <div className="flex justify-around">
                        <button className="py-3 rounded-md px-5 bg-white border border-secondary hover:bg-violet-400">
                            Send message
                        </button>
                        <button className="py-3 rounded-md px-6 border border-secondary bg-secondary text-white hover:bg-violet-500">
                            Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
