import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    
    console.log(props.product && props.product.name);
 
    return (
        <div className ="product">
            <div>
                <img src={props.product && props.product.img} alt=""/>
            </div>
            <div className="product-name">
            <h4>{props.product && props.product.name}</h4>
            <br/>
            <p><small>by: {props.product && props.product.seller}</small></p>
            <p>${props.product && props.product.price}</p>
            <br/>
            <p><small>Only {props.product && props.product.stock} left in stock - Order soon</small></p>
            <button onClick= {() => props.handleBtn(props.product)}
             className="btn"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
         
            
        </div>
    );
};

export default Product;