import React from 'react'

const PageTitle = ({title}) => {
    return (
        <div className='flex flex-row items-center justify-between'>
            <p className='font-semibold'
                style={{ width: '40%', fontSize: '40px', fontFamily: 'Poppins', color: '#0B0909', letterSpacing: '1px' }}>
                {title}
            </p>
            <div className='flex' style={{ width: '60%',paddingRight: '200px'  }}>
                <div className='w-full' style={{ background: 'linear-gradient(91deg, #FF9C1A 7.92%, #E80505 108.2%)', height: '2px' }}></div>
            </div>
        </div>
    )
}

export default PageTitle