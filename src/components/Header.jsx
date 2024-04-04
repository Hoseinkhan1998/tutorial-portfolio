import React from 'react';
import NightModIcon from '../Icons/NightModIcon';

const Header = () => {
    return (
        <div className='w-full justify-between items-center flex flex-row mt-7'>
            <p className='header'>Mohammad Hosein <span style={{color: 'rgba(255, 156, 26, 1), rgba(237, 37, 10, 1)'}}>Mazinani</span></p>
            <NightModIcon />
        </div>
    )
}

export default Header