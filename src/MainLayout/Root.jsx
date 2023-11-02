import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nav";

const Root = () => {
    return (
        <div className="lg:bg-gray-100">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;