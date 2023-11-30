import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./navbar/footer";

function Backbone() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Backbone;
