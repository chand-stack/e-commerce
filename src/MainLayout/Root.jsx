import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-gray-100">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;