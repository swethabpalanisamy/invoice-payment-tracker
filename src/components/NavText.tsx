import React from 'react';

type Props={
    img: string,
    text: String
}

function NavText({img, text}:Props) {
  return (
    <div style={{display:"flex",gap:"0.75rem", fontWeight:"600", alignItems:"center",paddingBottom:"10px"}}><img src={img} /><span>{text}</span></div>
  )
}

export default NavText