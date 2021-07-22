import { useSelector } from "react-redux";
import WorkshopCard from "../WorkshopCard/WorkshopCard.component";


const WorkshopsList = () => {
    const allworkshops = useSelector(state => state.workshops)
    const filter = useSelector(state => state.filter)

    const workshops = filter === "All" ? allworkshops : allworkshops.filter(w => w.category === filter.toLowerCase())

    return (
        <div className="workshopslist-container">
            <div className="workshopslist-title-container">
                <span className="workshopslist-title">Workshops</span> <br />
                <span className="workshoplist-title-desc">Displayed:</span> <span className="workshoplist-title-num">{workshops.length}</span>
            </div>
            {
                workshops.map(workshop =>
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                )
            }
        </div>
    );
}

export default WorkshopsList;