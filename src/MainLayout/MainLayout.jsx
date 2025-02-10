import { Outlet } from "react-router-dom";
import Home from "../COMPONENTS/Home";
import Navbar from "../COMPONENTS/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <main className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;