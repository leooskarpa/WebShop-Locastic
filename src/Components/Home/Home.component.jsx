import Dropdown from "../Dropdown/Dropdown";
import WorkshopsList from "../WorkshopsList/WorkshopsList.component";


const Home = () => {
    return (
        <div className="home-container">
            <Dropdown />
            <WorkshopsList />
        </div>
    );
}

export default Home;