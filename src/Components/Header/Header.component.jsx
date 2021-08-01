import logo_pic from '../../Images/logo.svg'
import cart_pic from '../../Images/cart.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebar } from '../../app/store'
import { Link } from 'react-router-dom'


const Header = () => {
    const cart = useSelector(state => state.orders)
    const dispatch = useDispatch()
    const sidebarActive = useSelector(state => state.sidebar)

    const getCartText = (cart) => {
        if (cart.length === 0) {
            return "Cart is Empty"
        }
        else {
            return `${cart.length} ${cart.length === 1 ? 'workshop' : 'workshops'} in Cart`
        }
    }


    return (
        <div className="header-container">
            <div className="logo-container">
                <Link to='/'>
                    <img className="logo" src={logo_pic} alt="Logo" />
                </Link>
            </div>
            <div className="cart-container" onClick={() => dispatch(setSidebar(!sidebarActive))}>
                <img className="cart-img" src={cart_pic} alt="Cart" />
                <span>
                    {getCartText(cart)}
                </span>
            </div>
        </div>
    );
}

export default Header;