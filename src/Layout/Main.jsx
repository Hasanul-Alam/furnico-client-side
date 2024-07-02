import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/home/Footer/Footer";


const Main = () => {

    const location = useLocation();

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* Make footer invisible while at login and registration page. */}
            {location.pathname !== '/login' && location.pathname !== '/registration' && location.pathname !== '/purchase' && location.pathname !== '/user-dashboard' ? <Footer></Footer> : ''}
        </div>
    );
};

export default Main;