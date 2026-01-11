import Footer from "../navbar/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />   {/* 👈 yahan pages inject honge */}
      <Footer />
    </>
  );
};

export default MainLayout;
