import React from "react";
import "./ProductItem.css";
function ProductItem({ item }) {
    return (
        <div className="product-card">
            <h2>{item.title}</h2>
            <p>Giá: {item.price}$</p>
            <span>Mô tả: {item.description}</span>
        </div>
    );
}

export default ProductItem;
