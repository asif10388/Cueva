import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            cartItems.length?
            cartItems.map(cartItem =>(
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <span classname = "empty-message">Your Cart Is Empty</span>
            } 
        </div>
        
        <CustomButton onClick={() => 
            {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({cartItems:selectCartItems})

export default withRouter(connect(mapStateToProps)(CartDropdown));