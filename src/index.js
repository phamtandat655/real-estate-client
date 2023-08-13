import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
import UserContextProvider from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HouseContextProvider>
        <BrowserRouter>
            <React.StrictMode>
                <UserContextProvider>
                    <App />
                </UserContextProvider>
            </React.StrictMode>
        </BrowserRouter>
    </HouseContextProvider>,
);
