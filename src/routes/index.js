import Home from '~/pages/Home';
import Subscription from '~/pages/Subscription';
// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/subscription', component: Subscription },
    { path: '/upload', component: Subscription, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
