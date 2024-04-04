import React from 'react';



const PortfolioCard = ({image, title1, title2, color}) => {
  return (
    <div className='w-full flex flex-col rounded-lg' style={{ padding: '2% 2%', background: color }}>
        <img src={image} />
        <p style={{color: 'rgba(26, 16, 3, 0.5)', fontFamily: 'Poppins', fontSize: '13px', fontWeight: 400, marginTop:'10px'}}>{title1}</p>
        <p style={{color: 'rgba(26, 16, 3, 1)', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400, marginTop:'-7px'}}>{title2}</p>
    </div>
  )
}

export default PortfolioCard