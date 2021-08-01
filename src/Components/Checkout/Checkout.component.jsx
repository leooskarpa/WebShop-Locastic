import backBtnIcon from '../../Images/exit_btn.svg'
import { useSelector, useDispatch } from 'react-redux'
import { removeAllOrders, setCheckout } from '../../app/store'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";


const Checkout = () => {
    const checkoutActive = useSelector(state => state.checkout)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (checkoutActive) {
            document.body.style.overflow = 'hidden';

        } else {
            document.body.style.overflow = 'auto';
        }
    }, [checkoutActive])


    // Thank You page
    const [success, setSuccess] = useState(false);

    // Errors
    const [firstNameErr, setFirstNameErr] = useState("")
    const [lastNameErr, setLastNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [dobErr, setDobErr] = useState("")
    const [genderErr, setGenderErr] = useState("")
    const [addressErr, setAddressErr] = useState("")
    const [zipcodeErr, setZipcodeErr] = useState("")
    const [agreeErr, setAgreeErr] = useState("")

    const changeHandler = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstNameErr('')
                break
            case 'lastName':
                setLastNameErr('')
                break
            case 'email':
                setEmailErr('')
                break
            case 'dob':
                setDobErr('')
                break
            case 'gender':
                setGenderErr('')
                break
            case 'address':
                setAddressErr('')
                break
            case 'zipcode':
                setZipcodeErr('')
                break
            case 'agree':
                setAgreeErr('')
                break
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()

        let error = false

        for (let input of e.target) {
            switch (input.name) {
                case 'firstName':
                    if (input.value.length === 0) {
                        error = true
                        setFirstNameErr('First name required!')
                    } else if (input.value.length < 2) {
                        error = true
                        setFirstNameErr('First name too short!')
                    } else if (!input.value.match(/^[A-Za-z]+$/)) {
                        error = true
                        setFirstNameErr('Only A-Z characters!')
                    }
                    break
                case 'lastName':
                    if (input.value.length === 0) {
                        error = true
                        setLastNameErr('Last name required!')
                    } else if (input.value.length < 2) {
                        error = true
                        setLastNameErr('Last name too short!')
                    } else if (!input.value.match(/^[A-Za-z]+$/)) {
                        error = true
                        setLastNameErr('Only A-Z characters!')
                    }
                    break
                case 'email':
                    if (!input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                        error = true
                        setEmailErr('Wrong email, try again!')
                    }
                    break
                case 'dob':
                    if (input.value.length === 0) {
                        error = true
                        setDobErr('I need your age!')
                        break
                    }
                    const date = new Date(input.value)
                    const today = new Date()

                    const diff = (today.getTime() - date.getTime()) / (1000 * 3600 * 24 * 365)
                    if (diff < 0) {
                        error = true
                        setDobErr("You're still not born...")
                    } else if (diff > 120) {
                        error = true
                        setDobErr("So, you're dead, nice!")
                    }
                    break
                case 'gender':
                    if (input.value === 'None') {
                        error = true
                        setGenderErr('This is required!')
                    }
                    break
                case 'address':
                    if (input.value.length < 15) {
                        error = true
                        setAddressErr('Incorrect address!')
                    }
                    break
                case 'zipcode':
                    if (input.value.length < 6) {
                        error = true
                        setZipcodeErr('You are out of this planet!')
                    }
                    break
                case 'agree':
                    if (!input.checked) {
                        error = true
                        setAgreeErr('Please, agree to this...')
                    }
                    break
            }
        }

        if (!error) {
            setSuccess(true)
        }
    }

    const getBack = (e) => {
        setFirstNameErr('')
        setLastNameErr('')
        setEmailErr('')
        setDobErr('')
        setGenderErr('')
        setAddressErr('')
        setZipcodeErr('')
        setAgreeErr('')
        setSuccess(false)

        if (e.target.title === 'backBtn') {
            dispatch(setCheckout(false))
        }
        else {
            dispatch(setCheckout(false))
            dispatch(removeAllOrders())
            history.push('/')
        }

    }

    return (
        <div className={`checkout-background-handler${checkoutActive ? 'active' : 'passive'}`}>
            {!success ?
                <div className={`checkout-container-${checkoutActive ? 'active' : 'passive'}`}>
                    <div className="checkout-title-back-btn-container">
                        <div className="checkout-title">
                            Checkout
                        </div>
                        <div className="checkout-back-btn-container">
                            <img src={backBtnIcon} alt="Back btn" title="backBtn" onClick={getBack} />
                        </div>
                    </div>
                    <div className="checkout-desc-container">
                        Welcome to Checkout! Please fill in the required information.
                    </div>
                    <div className="checkout-form-container">
                        <form className="checkout-form" onSubmit={submitHandler}>
                            <div className="checkout-form-text-input-container">
                                <div className="checkout-form-label-container">
                                    <label className="checkout-form-label" htmlFor="firstName">First Name</label>
                                    <div className="checkout-form-label-err">
                                        {firstNameErr}
                                    </div>
                                </div>
                                <input className="checkout-form-text-input" type="text" name="firstName" placeholder="Type your first name" onChange={changeHandler} />
                            </div>
                            <div className="checkout-form-text-input-container">
                                <div className="checkout-form-label-container">
                                    <label className="checkout-form-label" htmlFor="lastName">Last Name</label>
                                    <div className="checkout-form-label-err">
                                        {lastNameErr}
                                    </div>
                                </div>
                                <input className="checkout-form-text-input" type="text" name="lastName" placeholder="Type your last name" onChange={changeHandler} />
                            </div>
                            <div className="checkout-form-text-input-container">
                                <div className="checkout-form-label-container">
                                    <label className="checkout-form-label" htmlFor="email">Email Address</label>
                                    <div className="checkout-form-label-err">
                                        {emailErr}
                                    </div>
                                </div>
                                <input className="checkout-form-text-input" type="text" name="email" placeholder="Type your email" onChange={changeHandler} />
                            </div>

                            <div className="checkout-form-date-and-gender-container">
                                <div className="checkout-form-date">
                                    <div className="checkout-form-label-container">
                                        <label className="checkout-form-label" htmlFor="dob">Date of Birth</label>
                                        <div className="checkout-form-label-err">
                                            {dobErr}
                                        </div>
                                    </div>
                                    <input className="checkout-form-date-input" name="dob" type="date" onChange={changeHandler} />
                                </div>
                                <div className="checkout-form-gender">
                                    <div className="checkout-form-label-container">
                                        <label className="checkout-form-label" htmlFor="gender">Gender</label>
                                        <div className="checkout-form-label-err">
                                            {genderErr}
                                        </div>
                                    </div>
                                    <select className="checkout-form-select" name="gender" placeholder="Choose your gender" onChange={changeHandler}>
                                        <option className="checkout-form-select-item" value="None">Select Gender</option>
                                        <option className="checkout-form-select-item" value="M">Male</option>
                                        <option className="checkout-form-select-item" value="F">Female</option>
                                        <option className="checkout-form-select-item" value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="checkout-form-text-input-container">
                                <div className="checkout-form-label-container">
                                    <label className="checkout-form-label" htmlFor="address">Address</label>
                                    <div className="checkout-form-label-err">
                                        {addressErr}
                                    </div>
                                </div>
                                <input className="checkout-form-text-input" type="text" name="address" placeholder="Type your address" onChange={changeHandler} />
                            </div>
                            <div className="checkout-form-text-input-container">
                                <div className="checkout-form-label-container">
                                    <label className="checkout-form-label" htmlFor="zipcode">Zip Code</label>
                                    <div className="checkout-form-label-err">
                                        {zipcodeErr}
                                    </div>
                                </div>
                                <input className="checkout-form-text-input" type="text" name="zipcode" placeholder="eg. 23106" onChange={changeHandler} />
                            </div>
                            <div className="checkout-form-checkbox-container">
                                <label className="checkbox">
                                    <span className="checkbox-input">
                                        <input type="checkbox" name="agree" onChange={changeHandler} />
                                        <span className="checkbox-control">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                focusable="false"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="checkout-form-label-container">
                                        <span className="radio-label">I agree</span>
                                        <div className="checkout-form-label-err">
                                            {agreeErr}
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="checkout-form-submit-btn-container">
                                <input className="checkout-form-submit-btn" type="submit" value="Checkout" />
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div className={`checkout-container-${checkoutActive ? 'active' : 'passive'}`}>
                    <div className="checkout-exit-holder">
                        <div className="checkout-exit-container">
                            <div className="checkout-exit-title">
                                Thank you!
                            </div>
                            <div className="checkout-exit-desc">
                                Thank you for using our webshop!<br />
                                Come back anytime :)
                            </div>
                        </div>
                        <div className="checkout-exit-btn-container" title="exitBtn" onClick={getBack}>
                            Back to Shop
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Checkout;