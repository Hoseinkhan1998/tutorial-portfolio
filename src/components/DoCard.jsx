import React from 'react'

const DoCard = ({ icon, head, title, color }) => {
    return (
        <div className='flex flex-col rounded-2xl' style={{ width: '48%', padding: '1% 3%', background: color  }}>
            <div className='w-full flex flex-row items-center'>
                {icon}
                <p style={{ color: '#000', fontSize: '24px', fontFamily: 'Poppins', fontWeight: 'bold', marginLeft: '10px' }}>{head}</p>
            </div>
            <p style={{ color: '#000', fontSize: '14px', fontFamily: 'Raleway', letterSpacing: '0.35px' }}>
                {title}
            </p>
        </div>
    )
}

export default DoCard