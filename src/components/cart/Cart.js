import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = '';
    for (const channleProduct of cart) {
        total = total + channleProduct.price;
    }
    for (const channleProduct of cart) {
        name = name + channleProduct.name;
    }
    return (
        <div className="channel-update">
            <h3 >Total Added {props.cart.length} Channels </h3>
            {/* <h5>Channel Subscribes: {cart.length}</h5> */}
            <br />
            <h4>Total Monthly Income: ${total}</h4>
            <h4>Channel Added:</h4>
            <p>{name}</p>

        </div >

    );
};

export default Cart;