import { useSelector } from "react-redux";

import WorkshopCard from "../WorkshopCard/WorkshopCard.component";
import './WorkshopsList.component.css'


const WorkshopsList = () => {
    const allworkshops = useSelector(state => state.workshops)
    const filter = useSelector(state => state.filter)

    const workshops = filter === "All" ? allworkshops : allworkshops.filter(w => w.category === filter.toLowerCase())

    return (
        <div className="workshopslist-container">
            <span className="workshopslist-title">Workshops</span>
            {
                workshops.map(workshop =>
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                )
            }
        </div>
    );
}

export default WorkshopsList;