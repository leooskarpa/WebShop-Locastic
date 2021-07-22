import cartIcon from '../../Images/cart.svg'
import dateIcon from '../../Images/date.svg'
import timeIcon from '../../Images/clock.svg'
import designIcon from '../../Images/brush.svg'
import backendIcon from '../../Images/backend.svg'
import frontendIcon from '../../Images/frontend.svg'
import marketingIcon from '../../Images/marketing.svg'
import { date } from 'check-types'




const WorkshopCard = ({ workshop }) => {
    const date_and_time = new Date(workshop.date)

    console.log(date_and_time)

    const date = `${date_and_time.getDate()}.${date_and_time.getMonth() + 1}.${date_and_time.getFullYear()}.`
    const time = `${date_and_time.getHours()}:${date_and_time.getMinutes()}`

    return (
        <div className="workshopcard-container">
            <div className="workshopcard-img-container">
                <img src={workshop.imageUrl} alt="Workshop" />
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
                <div className="workshopcard-title">
                    {workshop.title}
                </div>
                <div className="workshopcard-bottom">
                    <div className="workshopcard-price-holder">
                        <span className="workshopcard-price">{workshop.price},00</span> <span className="workshopcard-eur">EUR</span>
                    </div>
                    <div className="workshopcard-cart-btn">
                        <img className="workshopcard-cart-img" src={cartIcon} alt="Add to cart" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkshopCard;