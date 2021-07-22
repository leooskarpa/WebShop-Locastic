import Dropdown from "../Dropdown/Dropdown";
import WorkshopsList from "../WorkshopsList/WorkshopsList.component";
import './Home.component.css';


const Home = () => {
    return (
        <div className="home-container">
            <Dropdown />
            <WorkshopsList />
        </div>
    );
}

export default Home;