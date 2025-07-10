import React from "react";

const ProductListingItem = ({ product }) => {
    const { name, price, inStock } = product;
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>${price.toFixed(2)}</p>
            <p>{inStock ? "In Stock" : "Out of Stock "}</p>
        </div>
    );
};

export default ProductListingItem;