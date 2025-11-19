import React from 'react'

const Product = ({title,price}) => {
  return (
    <div style={{border:"1px solid black" , marginBottom:"2px"}}>
      <p>Title:{title}</p>
      <p>Price:{price}</p>
    </div>
  )
}

export default Product