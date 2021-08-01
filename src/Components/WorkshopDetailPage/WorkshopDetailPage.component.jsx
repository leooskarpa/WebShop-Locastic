import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import backBtnIcon from '../../Images/back_arrow.svg'
import dateIcon from '../../Images/date.svg'
import timeIcon from '../../Images/clock.svg'
import dropdownIcon from '../../Images/dropdown_arrow.svg'
import WorkshopCard from '../WorkshopCard/WorkshopCard.component'
import { useState, useRef } from "react";
import { useDetectClickOutside } from "../Extras/useDetectClickOutside";
import { Link } from "react-router-dom";
import { setAmount } from "../../app/store";


const WorkshopDetailPage = () => {
    const dropdownRef = useRef(null)
    const dispatch = useDispatch()
    const props = useParams()
    const id = parseInt(props.id)
    const cart = useSelector(state => state.workshops)
    const users = useSelector(state => state.users)

    const [workshopAmount, setWorkshopAmount] = useState(1)
    const [active, setActive] = useDetectClickOutside(dropdownRef, false);

    const workshop = cart.filter(w => w.id === id)[0]
    const user = users.filter(u => workshop.userId === u.id)[0]
    const similarWorkshops = cart.filter(w => w.category === workshop.category && w !== workshop).slice(0, 3)

    const date_and_time = new Date(workshop.date)

    const date = `${date_and_time.getDate()}.${date_and_time.getMonth() + 1}.${date_and_time.getFullYear()}.`
    const time = `${date_and_time.getHours()}:${date_and_time.getMinutes()}`


    const changeAmount = (value) => {
        setWorkshopAmount(value)
        setActive(false)
    }

    const addToCart = () => {
        dispatch(setAmount({ workshop: workshop, amount: workshopAmount }))
    }

    return (
        <div>
            <div className="workshopdetailpage-container">
                <div className="workshopdetailpage-back-btn-container">
                    <Link className="workshopdetailpage-back-text" to="/" style={{ textDecoration: 'none' }}>
                        <img className="workshopdetailpage-back-img" src={backBtnIcon} alt="Back button" />
                        Back
                    </Link>
                </div>
                <div className="workshopdetailpage-description-container">
                    <div className="workshopdetailpage-image-container">
                        <img className="workshopdetailpage-image" src={workshop.imageUrl} alt="Workshop" />
                    </div>
                    <div className="workshopdetailpage-info-container">
                        <div>
                            <div className="workshopdetailpage-date-and-time-container">
                                <div className="workshopcard-date">
                                    <img src={dateIcon} alt="date" />
                                    {date}
                                </div>
                                <div className="workshopcard-time">
                                    <img src={timeIcon} alt="clock" />
                                    {time}
                                </div>
                            </div>
                            <div className="workshopdetailpage-title">
                                {workshop.title}
                                <div className="workshopdetailpage-author-with">
                                    WITH <span className="workshopdetailpage-author">{user.name}</span>
                                </div>
                            </div>
                            <div className="workshopdetailpage-description">
                                {workshop.desc}
                            </div>
                        </div>
                        <div className="workshopdetailpage-buy-ticket-container">
                            <div className="workshopdetailpage-buy-ticket-price">
                                <div className="workshopcard-price-holder">
                                    <span className="workshopcard-price">{workshop.price * workshopAmount},00</span> <span className="workshopcard-eur">EUR</span>
                                </div>
                            </div>
                            <div className="order-card-dropdown">
                                <div className="order-card-dropdown-btn" onClick={() => setActive(!active)}>
                                    {workshopAmount} <img src={dropdownIcon} alt="Arrow" />
                                </div>
                                <div ref={dropdownRef} className="order-card-dropdown-items-list" style={{ display: `${active ? 'block' : 'none'}` }}>
                                    <div className="order-card-dropdown-item" onClick={() => changeAmount(1)}>1</div>
                                    <div className="order-card-dropdown-item" onClick={() => changeAmount(2)}>2</div>
                                    <div className="order-card-dropdown-item" onClick={() => changeAmount(3)}>3</div>
                                    <div className="order-card-dropdown-item" onClick={() => changeAmount(4)}>4</div>
                                    <div className="order-card-dropdown-item" onClick={() => changeAmount(5)}>5</div>
                                </div>
                            </div>
                            <div className="workshopdetailpage-buy-ticket-btn" onClick={addToCart}>
                                Add to Cart
                            </div>
                        </div>
                        <div className="bigger-buy-ticket-container">
                            <div className="workshopdetailpage-buy-ticket-title">
                                Buy your Ticket
                            </div>
                            <div className="workshopdetailpage-buy-ticket-price">
                                <div className="workshopcard-price-holder">
                                    <span className="workshopdetailpage-price">{workshop.price * workshopAmount},00</span> <span className="workshopdetailpage-eur">EUR</span>
                                </div>
                            </div>
                            <div className="workshopdetailpage-buy-ticket-bottom-container">
                                <div className="order-card-dropdown">
                                    <div className="order-card-dropdown-btn" onClick={() => setActive(!active)}>
                                        {workshopAmount} <img src={dropdownIcon} alt="Arrow" />
                                    </div>
                                    <div ref={dropdownRef} className="order-card-dropdown-items-list" style={{ display: `${active ? 'block' : 'none'}` }}>
                                        <div className="order-card-dropdown-item" onClick={() => changeAmount(1)}>1</div>
                                        <div className="order-card-dropdown-item" onClick={() => changeAmount(2)}>2</div>
                                        <div className="order-card-dropdown-item" onClick={() => changeAmount(3)}>3</div>
                                        <div className="order-card-dropdown-item" onClick={() => changeAmount(4)}>4</div>
                                        <div className="order-card-dropdown-item" onClick={() => changeAmount(5)}>5</div>
                                    </div>
                                </div>
                                <div className="workshopdetailpage-buy-ticket-btn" onClick={addToCart}>
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="workshopdetailpage-similar-workshops-container">
                <div className="workshopdetailpage-similar-workshops-title">
                    Similar Workshops
                </div>
                <div className="workshopdetailpage-similar-workshops">
                    <div></div>
                    {
                        similarWorkshops.map(w =>
                            <WorkshopCard workshop={w} />
                        )
                    }
                </div>
            </div>
        </div >
    );
}

export default WorkshopDetailPage;