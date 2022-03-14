import { Button } from '@mui/material'
import { width } from '@mui/system'
import React, { useState } from 'react';

const ProductCard = (props) => {
  const [src, setSrc] = useState(props.src);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const Desc = () => {
    if(description !== ""){
      return (<p className="productText">{description}</p>)
    }else if(description === ""){
      return ;
  }
}
  return (
    <div id = "displyPanel" className="productCard">
      <img src={src} alt="" />
      <div className="productInfo">
          <div className="productName">
              <p>{title}</p>
              {
                props.description ? <span><i class="fa-regular fa-heart"></i></span>: ''
              }
              
          </div>
          <Desc/>
          
      </div>
  </div>
    
  )
}

export default ProductCard