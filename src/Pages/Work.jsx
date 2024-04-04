import React from 'react';
import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';
import Smart from './images/4.png';
import Next from './images/1.png';
import Rental from './images/5.png';
import Mentor from './images/2.png';
import IdeaFlow from './images/3.png';
import PortfolioCard from '../components/PortfolioCard';

const Work = () => {
  return (
    <div className='flex flex-col w-full'>
      <PageTitle title="Portfolio " />
      <div className='w-full flex flex-row justify-between pt-3' style={{ paddingLeft: '250px' }}>
        <Link className='portfolio'>All</Link>
        <Link className='portfolio'>App Development</Link>
        <Link className='portfolio'>Web Development</Link>
        <Link className='portfolio'>Design</Link>
        <Link className='portfolio'>Mentorship</Link>
      </div>
      <div className='w-full flex flex-row mt-7'>
        <div className='flex flex-col gap-7' style={{ width: '50%', marginRight: '20px' }}>
        <PortfolioCard image={Smart} title1='App Development' title2='Smart Bank App' color='rgba(255, 227, 191, 1)' />
        <PortfolioCard image={Rental} title1='UI/UX' title2='Rental' color= 'rgba(255, 244, 229, 1)' />
        <PortfolioCard image={IdeaFlow} title1='Web Development' title2='IdeaFlow' color='rgba(255, 244, 229, 1)' />
        </div>

        <div className='flex flex-col gap-7' style={{ width: '50%', marginLeft: '20px' }}>
        <PortfolioCard image={Next} title1='Blog' title2='NEXT.js' color='rgba(255, 238, 217, 1)' />
        <PortfolioCard image={Mentor} title1='Mentorship' title2='Tech Mentor' color= 'rgba(255, 227, 191, 1)' />
        </div>
      </div>
    </div>
  )
}

export default Work