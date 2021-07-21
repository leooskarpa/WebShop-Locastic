import logo_pic from '../../Images/logo.svg'
import cart_pic from '../../Images/cart.svg'
import './Header.component.css'


const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={logo_pic} alt="Logo" />
            </div>
            <div className="cart-container">
                <img src={cart_pic} alt="Cart" />
                <span>Cart</span>
            </div>
        </div>
    );
}

export default Header;