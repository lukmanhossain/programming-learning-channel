import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, image, author, subscribers, videos, date, price } = props.channleProduct;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className="card-design">
                <div className="product-name">
                    <img className="img" src={image} alt="" />
                    <h4>Name: {name} </h4>
                    <p>Author: {author}</p>
                    <p>Subscribers: {subscribers}</p>
                    <p>Videos: {videos}</p>
                    <p>Join Date: {date}</p>
                    <p>Monthly Income:${price}</p>
                    <button
                        onClick={() => props.handleAddToCart(props.channleProduct)}

                        className="btn-purchase">{element} Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;