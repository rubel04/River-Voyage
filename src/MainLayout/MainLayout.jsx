import { Outlet } from "react-router-dom";
import Navbar from "../COMPONENTS/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <main className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;