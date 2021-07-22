import { useSelector } from "react-redux";
import WorkshopCard from "../WorkshopCard/WorkshopCard.component";


const WorkshopsList = () => {
    const allworkshops = useSelector(state => state.workshops)
    const filter = useSelector(state => state.filter)

    const workshops = filter === "All" ? allworkshops : allworkshops.filter(w => w.category === filter.toLowerCase())

    return (
        <div className="workshopslist-page-container">
            <div className="workshopslist-title-container">
                <span className="workshopslist-title">Workshops</span> <br />
                <span className="workshopslist-title-desc">Displayed:</span> <span className="workshopslist-title-num">{workshops.length}</span>
            </div>
            <div className="workshopslist-container">
                {
                    workshops.map(workshop =>
                        <WorkshopCard key={workshop.id} workshop={workshop} />
                    )
                }
            </div>
        </div>
    );
}

export default WorkshopsList;