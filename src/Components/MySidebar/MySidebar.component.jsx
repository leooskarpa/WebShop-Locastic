import cart_pic from '../../Images/cart.svg'
import exitIcon from '../../Images/exit_btn.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebar, setCheckout } from '../../app/store'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderCard from './OrderCard/OrderCard.component'
import Checkout from '../Checkout/Checkout.component'



const MySidebar = () => {
    const cart = useSelector(state => state.orders)
    const sidebarActive = useSelector(state => state.sidebar)
    const checkoutActive = useSelector(state => state.checkout)
    const dispatch = useDispatch()


    const getSubtotal = () => {
        var subtotal = 0;

        for (let w of cart) {
            subtotal += w.workshop.price * w.amount
        }
        return subtotal
    }

    const checkoutHandler = () => {
        dispatch(setCheckout(true))
        dispatch(setSidebar(!sidebarActive))
    }


    return (
        <div className={`cart-sidebar-container-${sidebarActive ? 'active' : 'passive'}`}>
            <div className="cart-sidebar-title-container">
                <div className="cart-sidebar-title">
                    <img className="cart-sidebar-title-img" src={cart_pic} alt="Cart" />
                    {cart.length} {cart.length === 1 ? 'Workshop' : 'Workshops'}
                </div>
                <div className="cart-sidebar-exit">
                    <img src={exitIcon} alt="Exit" onClick={() => dispatch(setSidebar(!sidebarActive))} />
                </div>
            </div>

            {cart.map(w =>
                <OrderCard key={w.workshop.id} w={w} />
            )}
            <div className="cart-sidebar-subtotal-container">
                <div className="cart-sidebar-subtotal-text">
                    SUBTOTAL
                </div>
                <div>
                    <span className="cart-sidebar-subtotal">{getSubtotal()},00</span><span className="order-card-eur">EUR</span>
                </div>
            </div>
            <div className="cart-sidebar-checkout-btn-container" onClick={checkoutHandler}>
                Checkout
            </div>
        </div>

    );
}

export default MySidebar;