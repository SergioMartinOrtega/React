import React from "react";
import './ProductsList.css'

function ProductList(props) {
    
    const productList = props.products.map(product => {
    return (
    <li key={product.id}>
      <h2>{product.name}</h2>
    <img src={product.image} alt={product.name} />
    <p>
      ({product.createdAt}) -
      <p>{product.description.length > 150 ? product.description.slice(0, 150) + '...' : product.description}</p>
    </p>
    <div className="price">{product.price}</div>
    <div>
      <button class="button">add to car</button>
    </div>
    </li>
    );
    });

    return (
        <ul>
            {productList}
        </ul>
    )
}

export default ProductList;