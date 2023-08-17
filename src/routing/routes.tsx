import { createBrowserRouter} from 'react-router-dom'
import HomePage from "./HomePage";
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import OurTeamPage from './OurTeamPage';


const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/about', element: <AboutPage/>},
    {path: '/about/:id', element: <OurTeamPage/>},
    {path: '/contact', element: <ContactPage/>}
]);

export default router;