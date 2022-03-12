import { Button } from '@mui/material'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import products from '../data/Products.json'

const ProductsPanel = (props) => {

  const [type, setType] = useState(props.type)
  const checkType = () => {
    // if( type === "display"){

    // } else if( type === "fav"){
      
    // }
  }

  return (
    <div className="ProductPanel">
        <div className="productHeader">
            <p className="paraHeader">Explore Brands</p>
            <Button variant="outlined">VIEW ALL</Button>
        </div>
        <div className="productPanelContent">
          {
            products.map((cur) => {
              return <ProductCard title={cur.name} />
                    // <ProductCard title={cur.name} description={cur.description} />
            }
            )
          }
        </div>

    </div>
  )
}

export default ProductsPanel