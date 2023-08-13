import React, { memo } from 'react';
import { useUserContext } from '../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const House = ({ house }) => {
    const { user } = useUserContext();
    const nav = useNavigate();

    const onClickDelete = (id) => {
        axios.delete(`http://localhost:4000/${id}`).then((res) => {
            window.location.reload();
        });
    };

    return (
        <div className="mt-4 mb-8 w-full max-w-[352px] mx-auto shadow-md shadow-gray-400 hover:shadow-2xl hover:-translate-y-1 cursor-pointer rounded-sm">
            <div className="p-2">
                <img
                    className=" max-h-82 rounded-md"
                    crossOrigin="anonymous"
                    src={`http://localhost:4000/assets${house?.image}`}
                    alt="house"
                />
            </div>
            <div>
                <div className="pb-1">
                    <span className="mx-3 text-xs bg-cyan-300 text-white px-1 rounded-full">{house?.type}</span>
                    <span className="text-xs bg-secondary text-white px-1 rounded-full">{house?.country}</span>
                </div>
                <div>
                    <h3 className="text-lg px-3 max-w-[260px] font-semibold mb-1">{house?.address}</h3>
                </div>
                <div className="px-4">
                    <span className="mr-2">
                        <i className="fa-solid fa-bed"></i> {house?.bedrooms}
                    </span>
                    <span className="mx-2">
                        <i className="fa-solid fa-bath"></i> {house?.bathrooms}
                    </span>
                    <span className="mx-2">
                        <i className="fa-solid fa-arrows-up-down-left-right"></i> {house?.surface}
                    </span>
                </div>
                <div>
                    <p className="px-3 py-2 text-lg font-semibold text-secondary">${house?.price}</p>
                </div>
                {user?.role === 1 && (
                    <div className=" pb-2 flex justify-around">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nav(`/property/update/${house?._id}`);
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded"
                        >
                            Update
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClickDelete(house?._id);
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 border-blue-700 rounded"
                        >
                            delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(House);
