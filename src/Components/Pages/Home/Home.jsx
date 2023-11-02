import Banner from "../../Shared/Banner";
import Decor from "../../Shared/Decor";
import Nav from "../../Shared/Nav";
import Offer from "../../Shared/Offer";
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
            <Banner></Banner>
            <div className="container mx-auto">
                <Offer></Offer>
                <Decor></Decor>
            </div>
            
        </div>
    );
};

export default Home;