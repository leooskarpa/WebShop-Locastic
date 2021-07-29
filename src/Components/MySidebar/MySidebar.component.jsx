import cart_pic from '../../Images/cart.svg'
import exitIcon from '../../Images/exit_btn.svg'
import removeIcon from '../../Images/trash.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebar, removeOrder } from '../../app/store'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const MySidebar = () => {
    const cart = useSelector(state => state.orders)
    const sidebarActive = useSelector(state => state.sidebar)
    const dispatch = useDispatch()
    const optionsForCounter = [
        {
            key: '1',
            text: '1',
            value: 1
        },
        {
            key: '2',
            text: '2',
            value: 2
        },
        {
            key: '3',
            text: '3',
            value: 3
        },
        {
            key: '4',
            text: '4',
            value: 4
        },
        {
            key: '5',
            text: '5',
            value: 5
        },
        {
            key: '6',
            text: '6',
            value: 6
        },
        {
            key: '7',
            text: '7',
            value: 7
        },
        {
            key: '8',
            text: '8',
            value: 8
        },
        {
            key: '9',
            text: '9',
            value: 9
        },
        {
            key: '10',
            text: '10',
            value: 10
        },

    ]

    const removeOrderHandler = (workshop) => {
        dispatch(removeOrder(workshop.workshop))
    }

    const getSubtotal = () => {
        var subtotal = 0;

        for (let w of cart) {
            subtotal += w.workshop.price * w.amount
        }
        return subtotal
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
            {
                cart.map(w =>
                    <div key={w.workshop.id} className="order-card-container">
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

                                    {/* Dodaj dropdown, bootstrap ocito ne radi... */}

                                </div>
                                <div className="order-cart-bottom-price-container">
                                    <span className="order-card-bottom-price">{w.workshop.price},00</span><span className="order-card-eur">EUR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className="cart-sidebar-subtotal-container">
                <div className="cart-sidebar-subtotal-text">
                    SUBTOTAL
                </div>
                <div>
                    <span className="cart-sidebar-subtotal">{getSubtotal()},00</span><span className="order-card-eur">EUR</span>
                </div>
            </div>
            <div className="cart-sidebar-checkout-btn-container">
                Checkout
            </div>
        </div>

    );
}

export default MySidebar;