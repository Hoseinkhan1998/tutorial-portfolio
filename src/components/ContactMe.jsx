import React from 'react';
import TextField from '@mui/material/TextField';

const ContactMe = ({title}) => {
    return (
        <div className='w-full flex flex-col'>
            <p style={{ color: '#000', fontSize: '16px', fontWeight: 600}}>{title}:</p>
            <TextField id="standard-basic" variant="standard" />
        </div>
    )
}

export default ContactMe