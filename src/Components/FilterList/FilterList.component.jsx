import designIcon from '../../Images/brush.svg'
import backendIcon from '../../Images/backend.svg'
import frontendIcon from '../../Images/frontend.svg'
import marketingIcon from '../../Images/marketing.svg'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterType } from '../../app/store'


const FilterList = () => {
    const [all, setAll] = useState(true);
    const [design, setDesign] = useState(false);
    const [frontend, setFrontend] = useState(false);
    const [backend, setBackend] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [active, setActive] = useState('all');

    const dispatch = useDispatch()

    const clickHandler = (e) => {

        switch (active) {
            case 'all':
                setAll(false)
                break
            case 'design':
                setDesign(false)
                break
            case 'frontend':
                setFrontend(false)
                break
            case 'backend':
                setBackend(false)
                break
            default:
                setMarketing(false)
        }

        switch (e.target.title) {
            case 'All':
                setAll(true)
                setActive('all')
                break
            case 'Design':
                setDesign(true)
                setActive('design')
                break
            case 'Frontend':
                setFrontend(true)
                setActive('frontend')
                break
            case 'Backend':
                setBackend(true)
                setActive('backend')
                break
            default:
                setMarketing(true)
                setActive('marketing')
        }



        dispatch(setFilterType(e.target.title))
    }


    return (
        <div className="filter-list-container">
            <div className="filter-list-title">
                Filter by category:
            </div>
            <div className="filter-list-items-container">
                <div className={`${all ? 'active-filter' : 'filter-list-item'}`}>
                    <span onClick={clickHandler} title="All">All</span>
                </div>
                <div className={`${design ? 'active-filter' : 'filter-list-item'}`}>
                    <span onClick={clickHandler} title="Design">Design</span>
                </div>
                <div className={`${frontend ? 'active-filter' : 'filter-list-item'}`} title='Frontend' onClick={clickHandler}>
                    Frontend
                </div>
                <div className={`${backend ? 'active-filter' : 'filter-list-item'}`} title='Backend' onClick={clickHandler}>
                    Backend
                </div>
                <div className={`${marketing ? 'active-filter' : 'filter-list-item'}`} title='Marketing' onClick={clickHandler}>
                    Marketing
                </div>
            </div>
        </div>
    );
}

export default FilterList;