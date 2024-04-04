import React from 'react';
import PageTitle from '../components/PageTitle';
import EducatIcon from '../Icons/EducatIcon';
import ExprienceIcon from '../Icons/ExprienceIcon';
import ResumeCard from '../components/ResumeCard';
import Skills from '../components/Skills';

const Resume = () => {
  return (
    <div className='flex flex-col w-full'>
      <PageTitle title="Resume " />

      <div className='flex flex-row w-full justify-between'>


          {/* Education */}


        <div className='flex flex-col' style={{ width: '50%', marginRight: '5%' }}>
          <div className='flex flex-row items-center mt-5 mb-7'>
            <EducatIcon />
            <p style={{ color: '#000', fontSize: '28px', fontFamily: 'Poppins', fontWeight: 'bold', marginLeft: '20px' }}>Education</p>
          </div>
          <ResumeCard title1='2020-2021' title2='Software Development ' title3='Moringa School' color='rgba(255, 227, 191, 1)' />
          <ResumeCard title1='2012-2016' title2='Disaster Management' title3='Masinde Muliro Universiity ' color='rgba(255, 238, 217, 1)' />
          <p style={{ color: '#000', fontFamily: 'Poppins', fontSize: '28px', letterSpacing: '0.7px', fontWeight: 'bold' }}>Work Skills</p>
          <div className='w-full flex flex-col'>
            <div className='flex flex-row gap-7 w-full mt-4'>
              <Skills title='NEXT.js' />
              <Skills title='React.js' />
              <Skills title='HTML 5' />
            </div>
            <div className='flex flex-row gap-5 w-full mt-4'>
              <Skills title='CSS 3' />
              <Skills title='Tailwind CSS' />
              <Skills title='Figma ' />
            </div>
            <div className='flex flex-row gap-5 w-full mt-4'>
              <Skills title='JavaScript' />
              <Skills title='Mongo DB' />
              <Skills title='SQL' />
            </div>
            <div className='flex flex-row gap-7 w-full mt-4'>
              <Skills title='Angular' />
              <Skills title='Android' />
              <Skills title='Git' />
            </div>
          </div>
        </div>


        {/* Experience */}

        
        <div className='flex flex-col' style={{ width: '50%', marginLeft: '5%' }}>
          <div className='flex flex-row items-center mt-5 mb-7'>
            <ExprienceIcon />
            <p style={{ color: '#000', fontSize: '28px', fontFamily: 'Poppins', fontWeight: 'bold', marginLeft: '20px' }}>Experience</p>
          </div>
          <ResumeCard title1='2022 - Present' title2='Technical Mentor ' title3='Moringa School' color='rgba(255, 238, 217, 1)' />
          <ResumeCard title1='2021-2022' title2='Website Development ' title3='Village 2 Nation ' color='rgba(255, 227, 191, 1)' />
          <p style={{ color: '#000', fontFamily: 'Poppins', fontSize: '28px', letterSpacing: '0.7px', fontWeight: 'bold' }}>Soft Skills</p>
          <div className='w-full flex flex-col'>
            <div className='flex flex-row gap-6 w-full mt-4'>
              <Skills title='Time Management' />
              <Skills title='Mentorship' />
            </div>
            <div className='flex flex-row gap-6 w-full mt-4'>
              <Skills title='Impeccable Communication' />
              <Skills title='Flexibility' />
            </div>
            <div className='flex flex-row gap-6 w-full mt-4'>
              <Skills title='Research' />
              <Skills title='Writing' />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Resume