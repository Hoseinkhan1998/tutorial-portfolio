import React from 'react'
import PageTitle from '../components/PageTitle';
import WebIcon from '../Icons/WebIcon';
import AppIcon from '../Icons/AppIcon';
import UiIcon from '../Icons/UiIcon';
import MentorIcon from '../Icons/MentorIcon';
import DoCard from '../components/DoCard';

const Home = () => {
  return (
    <div className='w-full flex flex-col'>
      <PageTitle title="ABOUT ME" />
      <p style={{ color: '#000', fontFamily: 'Raleway', lineHeight: '30px', fontSize: '16px', fontWeight: 900, marginTop: '30px' }}>
        Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
        full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
        My journey in the world of web development has been nothing short of exhilarating, and
        I constantly strive to enhance my skills and embrace emerging trends in the industry.
      </p>
      <p style={{ color: '#000', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Raleway', letterSpacing: '0.8px', marginTop: '35px' }}>
        What I do!
      </p>
      <div className='w-full flex flex-row justify-between mt-7'>
        <DoCard icon={<WebIcon />} head='Web Development'
          title="As a developer, I find myself most 
          captivated by the power and flexibility of 
          NEXT.js. I'm always eager to dive into new
          projects that leverage NEXT.js and 
          discover innovative ways to create fast, 
          scalable, and user-friendly applications." color="#FFEBD1"
        />

        <DoCard icon={<AppIcon />} head='App Development'
          title="With a focus on user-centric design and
          cutting-edge technologies, I thrive on 
          building intuitive and efficient apps 
          that make a positive impact on people's 
          lives. Let's turn ideas into reality and 
          shape the future together." color="#F2F7FC"
        />
      </div>

      <div className='w-full flex flex-row justify-between mt-7'>

        <DoCard icon={<UiIcon />} head='UI/UX Designing'
          title="Crafting visually appealing and intuitive user
          interfaces that offer a delightful user 
          experience is something I'm truly fanatic 
          about." color="#F2F7FC"
        />

        <DoCard icon={<MentorIcon />} head='Mentorship'
          title="I have also found great joy in sharing my 
          knowledge with others. Being a technical 
          mentor allows me to give back to the 
          community that has supported me 
          throughout my career. " color="#FFEBD1"
        />

      </div>
    </div>
  )
}

export default Home