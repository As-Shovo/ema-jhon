import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity,key} = props.product;

    const {handleRemove} = props


    return (
        <div className= "card-info">
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>handleRemove(key)} className="cart-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;