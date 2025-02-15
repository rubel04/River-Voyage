import { Outlet } from "react-router-dom";
import Navbar from "../COMPONENTS/Navbar";
import Footer from "../COMPONENTS/Footer";
import DynamicTitle from "../COMPONENTS/DynamicTitle";

const MainLayout = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <DynamicTitle></DynamicTitle>
      <main className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
