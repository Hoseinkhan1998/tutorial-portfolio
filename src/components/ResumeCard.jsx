import React from 'react'

const ResumeCard = ({title1, title2, title3, color}) => {
    return (
        <div className='w-full flex flex-col justify-between rounded-xl gap-2 mb-6'
            style={{ background: color , padding: '5% 0% 5% 2%' }}>
            <p style={{ color: 'rgba(26, 16, 3, 0.8)', fontSize: '16px', fontFamily: 'Raleway' }}>{title1}</p>
            <p style={{ color: '#000', fontSize: '14px', fontFamily: 'Raleway', fontWeight: '600' }}>{title2}</p>
            <p style={{ color: '#000', fontSize: '14px', fontFamily: 'Raleway', fontWeight: '600' }}>{title3}</p>
        </div>
    )
}

export default ResumeCard