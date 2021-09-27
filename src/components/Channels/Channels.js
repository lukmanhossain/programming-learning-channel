import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Channels.css'
const Channels = () => {
    const [channelsProduct, setChannelsProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./channel.JSON')
            .then(response => response.json())
            .then(data => setChannelsProduct(data));
    }, [])

    const handleAddToCart = (channleProduct) => {
        const newCart = [...cart, channleProduct];
        setCart(newCart);
    }
    const channelNameAddToCart = (channleProduct) => {
        const nameCart = [...cart, channleProduct];
        setCart(nameCart);
    }

    return (
        <div className="channels-container">
            <div className="channel-container">

                {
                    channelsProduct.map(channleProduct => <Product
                        key={channleProduct.key}
                        channleProduct={channleProduct}
                        handleAddToCart={handleAddToCart}
                        channelNameAddToCart={channelNameAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* <h5>Channel Subscribes: {cart.length}</h5> */}

            </div>
        </div>
    );
};

export default Channels;