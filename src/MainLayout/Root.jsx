import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nav";
import Footer from "../Components/Shared/Footer";

const Root = () => {
    return (
        <div className="lg:bg-[#F7FAFC]">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;