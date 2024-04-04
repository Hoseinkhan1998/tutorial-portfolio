import React from 'react';
import PageTitle from '../components/PageTitle';
import PhoneIcon from '../Icons/PhoneIcon';
import EmailIcon from '../Icons/EmailIcon';
import ContactMe from '../components/ContactMe';

const Contact = () => {
  return (
    <div className='flex flex-col w-full'>
      <PageTitle title="Contact " />
      <div className='w-full flex flex-row justify-between'>
        <div className='flex flex-col rounded-3xl mr-5 ' style={{ background: 'rgba(255, 238, 217, 1)', padding: '5% 5%', width: '50%' }}>
          <div className='flex flex-row w-full gap-4'>
            <PhoneIcon />
            <p style={{ color: '#000', fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold' }}>Phone: </p>
          </div>
          <div className='flex flex-col w-full pl-10 mt-5'>
            <p style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '14px', fontWeight: 'bold', fontFamily: 'Poppins' }}>+989203101785</p>
            <p style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '14px', fontWeight: 'bold', fontFamily: 'Poppins' }}>+98358203460</p>
          </div>
        </div>

        <div className='flex flex-col rounded-3xl ml-5 ' style={{ background: 'rgba(242, 247, 252, 1)', padding: '5% 5%', width: '50%' }}>
          <div className='flex flex-row w-full gap-4'>
            <EmailIcon />
            <p style={{ color: '#000', fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold' }}>Email: </p>
          </div>
          <div className='flex flex-col w-full pl-10 mt-5'>
            <p style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '14px', fontWeight: 'bold', fontFamily: 'Poppins' }}>Hosein.mazinani.1998@gmail.com</p>
          </div>
        </div>

      </div>
      <div className='flex flex-col w-full mt-6 gap-3 rounded-xl' style={{ padding: '5% 20% 5% 10%', background: 'rgba(248, 251, 251, 1)' }}>
        <p className='contact'>I am always open to discussing <span className='spancontact'> new projects, opportunities in tech world,
          partnerships </span> and more so <span className='spancontact'> mentorship </span>. </p>
        <ContactMe title='Name' />
        <ContactMe title='Email' />
        <ContactMe title='Message' />
        <div className='mt-3'>
          <button type='submit' style={{ padding: '10px 30px', border: '1px solid #FD8A18', borderRadius: '20px' }}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact