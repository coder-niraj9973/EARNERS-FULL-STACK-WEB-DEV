import React from 'react'
import { Product } from './Product'

function Products({products}) {
    // console.log(Nishant);
    return (
        <div style={{ backgroundColor: "white", color: "black" }}>
            {
                products.map(({ title, price }, i) => {
                    return (
                        <Product key={i} title={title} price={price} />
                    )
                })
            }
        </div>
    )

}

export default Products;
