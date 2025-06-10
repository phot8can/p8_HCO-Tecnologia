import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

function index() {
  return (
    <div className="bg-bg">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default index;
