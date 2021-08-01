import cartIcon from '../../Images/cart.svg'
import dateIcon from '../../Images/date.svg'
import timeIcon from '../../Images/clock.svg'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../app/store'
import { useHistory } from 'react-router-dom'


const WorkshopCard = ({ workshop }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const date_and_time = new Date(workshop.date)

    const date = `${date_and_time.getDate()}.${date_and_time.getMonth() + 1}.${date_and_time.getFullYear()}.`
    const time = `${date_and_time.getHours()}:${date_and_time.getMinutes()}`


    const addToCartClick = () => {
        dispatch(addOrder(workshop))
    }

    const handleClick = () => {
        history.push(`/workshop/${workshop.id}`)

        window.scrollTo({
            top: 0
        })
    }

    return (
        <div className="workshopcard-container">
            <div className="workshopcard-img-container">
                {/* <Link to={`/workshop/${workshop.id}`}> */}
                <img className="workshopcard-img" src={workshop.imageUrl} alt="Workshop" onClick={handleClick} />
                {/* </Link> */}
            </div>
            <div className="workshopcard-desc-container">
                <div className="workshopcard-date-and-time">
                    <div className="workshopcard-date">
                        <img src={dateIcon} alt="date" />
                        {date}
                    </div>
                    <div className="workshopcard-time">
                        <img src={timeIcon} alt="clock" />
                        {time}
                    </div>
                </div>
                <div className="workshopcard-title" onClick={handleClick}>
                    {workshop.title}
                </div>
                <div className="workshopcard-bottom">
                    <div className="workshopcard-price-holder">
                        <span className="workshopcard-price">{workshop.price},00</span> <span className="workshopcard-eur">EUR</span>
                    </div>
                    <div className="workshopcard-cart-btn" onClick={addToCartClick}>
                        <img className="workshopcard-cart-img" src={cartIcon} alt="Add to cart" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkshopCard;