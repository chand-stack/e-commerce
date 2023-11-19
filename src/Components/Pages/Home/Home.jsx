import Banner from "../../Shared/Banner";
import Decor from "../../Shared/Decor";
import Electronic from "../../Shared/Electronic";
import ExtraService from "../../Shared/ExtraService";
import Newsletter from "../../Shared/Newsletter";
import Offer from "../../Shared/Offer";
import Recommanded from "../../Shared/Recommanded";
import Service from "../../Shared/Service";
import Tabs from "../../Shared/Tabs";


const Home = () => {
    return (
        <div>
            <div className=" w-full border  mt-3">
            <div className="container mx-auto">
            <Tabs></Tabs>
            </div>
            </div>
            <Banner></Banner>
            <div className="container mx-auto">
                <Offer></Offer>
                <Decor></Decor>
                <Electronic></Electronic>
                <Service></Service>
                <Recommanded></Recommanded>
                <div className="hidden md:contents">
                    <ExtraService></ExtraService>
                </div>
                <Newsletter></Newsletter>
            </div>
            
        </div>
    );
};

export default Home;