import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import WorkshopCard from "../WorkshopCard/WorkshopCard.component";


const WorkshopsList = () => {
    const allworkshops = useSelector(state => state.workshops)
    const filter = useSelector(state => state.filter)

    const [workshops, setWorkshops] = useState([])
    const [workshopsShown, setWorkshopsShown] = useState(workshops.slice(0, 9))
    const [workshopsHidden, setWorkshopsHidden] = useState(workshops.slice(9))

    const loadMoreClick = () => {
        const newArray = workshopsShown

        for (let w of workshopsHidden.slice(0, 9)) {
            newArray.push(w)
        }
        setWorkshopsShown(newArray)
        setWorkshopsHidden(workshopsHidden.slice(9))
    }

    useEffect(() => {
        if (workshops !== undefined) {
            workshops.sort((a, b) => {
                const date1 = new Date(a.date)
                const date2 = new Date(b.date)

                return date1 - date2
            })
        }
        setWorkshopsShown(workshops.slice(0, 9))
        setWorkshopsHidden(workshops.slice(9))
    }, [workshops])

    useEffect(() => {
        setWorkshops(filter === "All" ? allworkshops : allworkshops.filter(w => w.category === filter.toLowerCase()))
    }, [filter, allworkshops])


    return (
        <div className="workshopslist-page-container">
            <div className="workshopslist-title-container">
                <span className="workshopslist-title">Workshops</span> <br />
                <span className="workshopslist-title-desc">Displayed:</span> <span className="workshopslist-title-num">{workshopsShown.length}</span>
            </div>
            <div className="workshopslist-container">
                {
                    workshopsShown.map(workshop =>
                        <WorkshopCard key={workshop.id} workshop={workshop} />
                    )
                }
            </div>
            {workshopsHidden.length ?
                <div className="workshoplist-load-more-container">
                    <div className="workshoplist-load-more" onClick={loadMoreClick}>
                        Load more
                    </div>
                </div>
                :
                <></>}
        </div>
    );
}

export default WorkshopsList;