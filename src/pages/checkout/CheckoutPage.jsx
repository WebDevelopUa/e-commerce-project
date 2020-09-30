import React from "react";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cartSelectors";
import {connect} from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {StripeCheckoutButton} from "../../components/stripe-button/StripeButton";
import './CheckoutPage.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>

        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}

        <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <div className='warning'>
            <h2>&#9888;  Use the following credit cards for payments !</h2>
            <p>4242 4242 4242 4242 (Visa), CVC - Any 3 digits, Date - Any future date </p>
            <p>5555 5555 5555 4444 (Mastercard), CVC - Any 3 digits, Date - Any future date</p>
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)