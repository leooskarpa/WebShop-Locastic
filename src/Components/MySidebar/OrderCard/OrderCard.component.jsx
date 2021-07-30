import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import removeIcon from '../../../Images/trash.svg'
import dropdownIcon from '../../../Images/dropdown_arrow.svg'
import { removeOrder, setAmount } from "../../../app/store";
import { useDetectClickOutside } from "../../Extras/useDetectClickOutside";

const OrderCard = ({ w }) => {
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()
    const cart = useSelector(state => state.orders)
    const [active, setActive] = useDetectClickOutside(dropdownRef, false);

    const removeOrderHandler = (workshop) => {
        dispatch(removeOrder(workshop.workshop))
    }

    const changeAmount = (value) => {
        dispatch(setAmount({ workshop: w.workshop, amount: value }))
        setActive(false)
    }

    return (
        < div className="order-card-container" >
            <div className="order-card-img-container">
                <img className="order-card-img" src={w.workshop.imageUrl} alt="Workshop" />
            </div>
            <div className="order-card-desc-container">
                <div className="order-card-title-container">
                    <div className="order-card-title">
                        {w.workshop.title}
                    </div>
                    <div className="order-card-remove-btn">
                        <img className="order-card-remove-img" src={removeIcon} alt="Remove" onClick={() => removeOrderHandler(w)} />
                    </div>
                </div>
                <div className="order-card-bottom-container">
                    <div className="order-card-bottom-counter-container">

                        <div className="order-card-dropdown">
                            <div className="order-card-dropdown-btn" onClick={() => setActive(!active)}>
                                {w.amount} <img src={dropdownIcon} alt="Arrow" />
                            </div>
                            <div ref={dropdownRef} className="order-card-dropdown-items-list" style={{ display: `${active ? 'block' : 'none'}` }}>
                                <div className="order-card-dropdown-item" onClick={() => changeAmount(1)}>1</div>
                                <div className="order-card-dropdown-item" onClick={() => changeAmount(2)}>2</div>
                                <div className="order-card-dropdown-item" onClick={() => changeAmount(3)}>3</div>
                                <div className="order-card-dropdown-item" onClick={() => changeAmount(4)}>4</div>
                                <div className="order-card-dropdown-item" onClick={() => changeAmount(5)}>5</div>
                            </div>
                        </div>

                    </div>
                    <div className="order-cart-bottom-price-container">
                        <span className="order-card-bottom-price">{w.workshop.price},00</span><span className="order-card-eur">EUR</span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default OrderCard;