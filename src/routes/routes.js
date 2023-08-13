import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import { config } from '../config/index';
import Home from '../pages/Home';
import AddProperty from '../pages/AddProperty';
import PropertyDetails from '../pages/PropertyDetails';
import UpdateProperty from '../pages/UpdateProperty';

export const publicRoute = [
    {
        path: config.routes.home,
        component: Home,
        layout: ['Header', 'Footer'],
    },
    {
        path: config.routes.propertyDetails,
        component: PropertyDetails,
        layout: ['Header', 'Footer'],
    },
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.register,
        component: Register,
    },
    {
        path: config.routes.addProperty,
        component: AddProperty,
        layout: ['Header', 'Footer'],
    },
    {
        path: config.routes.updateProperty,
        component: UpdateProperty,
        layout: ['Header', 'Footer'],
    },
    {
        path: config.routes.notFound,
        component: NotFound,
    },
];
