import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className=" max-w-[1250px] mx-auto">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
