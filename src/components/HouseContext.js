import React from 'react';

import { useState, useEffect, createContext } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);

    const [country, setCountry] = useState('Location (any)');
    const [countries, setCountries] = useState([]);

    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);

    const [price, setPrice] = useState('Price range (any)');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // countries
        const allCountries = houses.map((house) => {
            return house.country;
        });
        const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

        setCountries(uniqueCountries);

        // properties
        const allPropertes = houses.map((house) => {
            return house.type;
        });
        const uniquePropertes = ['Property type (any)', ...new Set(allPropertes)];

        setProperties(uniquePropertes);
    }, []);

    const handleClick = (e) => {
        setLoading(true);

        const isDefault = (str) => {
            return str.split(' ').includes('(any)');
        };

        console.log(isDefault(price));

        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);

        let newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);

            if (
                house.country === country &&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house;
            }

            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house;
            }

            if (!isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country;
            }

            if (isDefault(country) && !isDefault(property) && isDefault(price)) {
                return house.type === property;
            }

            if (isDefault(country) && isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    console.log(house);
                    return house;
                }
            }

            if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
                return house.country === country && house.type === property;
            }

            if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) return house.country === country;
            }

            if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) return house.type === property;
            }
        });

        setTimeout(() => {
            setHouses(newHouses);
            setLoading(false);
        });
    };

    return (
        <HouseContext.Provider
            value={{
                country,
                setCountry,
                countries,
                property,
                setProperty,
                properties,
                price,
                setPrice,
                houses,
                loading,
                handleClick,
            }}
        >
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;
