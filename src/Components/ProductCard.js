import { Button } from '@mui/material'
import { width } from '@mui/system'
import React, { useState } from 'react';

const ProductCard = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const Desc = () => {
    // debugger
    if(description !== "")
      return <p className="productText">{description}</p>;
    else
      return;
  }
  return (
    <div className="productCard">
        <img src="https://picsum.photos/150" alt="" />
        <div className="productInfo">
            <div className="productName">
                <p>{title}</p>
                <img src="" alt=""></img>
            </div>
            <Desc/>
        </div>
    </div>
  )
}

export default ProductCard