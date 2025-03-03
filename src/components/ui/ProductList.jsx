import React, { useState } from "react";
import "./ProductList.css";
import data from "../../data/data.js";
import ProductItem from "./ProductItem.jsx";

function ProductList() {
    const [grid, setGrid] = useState(false);

    return (
        <div className="container">
            <button className="toggle-btn" onClick={() => setGrid(!grid)}>
                Layout ({grid ? "List" : "Grid"})
            </button>

            {data.length === 0 ? (
                <p className="empty-message">Không có sản phẩm nào.</p>
            ) : (
                <div className={grid ? "grid-container" : "list-container"}>
                    {data.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default ProductList;
