import Dropdown from "../Dropdown/Dropdown";
import WorkshopsList from "../WorkshopsList/WorkshopsList.component";
import FilterList from '../FilterList/FilterList.component';


const Home = () => {
    return (
        <div className="home-container">
            <div className="dropdown-or-list-filter-menu-dropdown">
                <Dropdown />
            </div>
            <div className="dropdown-or-list-filter-menu-list">
                <FilterList />
            </div>
            <WorkshopsList />
        </div>
    );
}

export default Home;