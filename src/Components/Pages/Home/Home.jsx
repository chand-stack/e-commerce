import Nav from "../../Shared/Nav";
import Tabs from "../../Shared/Tabs";

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div className=" w-full border  mt-3">
            <div className="container mx-auto">
            <Tabs></Tabs>
            </div>
            </div>
            
            
        </div>
    );
};

export default Home;