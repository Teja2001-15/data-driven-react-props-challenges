import React from 'react';

const Product = (props) => {
    return (
        <div className='Product-card'>
            <h3>{props.data.name}</h3>
            <p>{props.data.price}</p>
            <p>{props.data.inStock ? "In Stock":"Out of Stock"}</p>
        </div>
    );
}

export default Product;