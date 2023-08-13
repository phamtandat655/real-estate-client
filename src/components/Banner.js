import React, { memo } from 'react';

import BannerImg from '../assets/img/house-banner.png';

const Banner = () => {
    return (
        <div className="bg-white flex justify-between flex-col md:flex-row py-5">
            <div className="flex items-center justify-center">
                <div className="md:pl-24 md:pr-32 px-4">
                    <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-2">
                        <span className="text-secondary">Rent</span> Your Dream House With Us.
                    </h1>
                    <p className="text-primary text-sm mb-3 md:mb-0">
                        Powerful, self-serve product and growth analytics to help you convert , engage , and retain more
                    </p>
                </div>
            </div>
            <div>
                <img className="md:object-cover object-contain" src={BannerImg} alt="banner" />
            </div>
        </div>
    );
};

export default memo(Banner);
