import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Work from './Pages/Work';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div style={{ padding: '0% 10%' }}>

      <Header />

      <div className='flex w-full flex-row mt-3'>
        <div className='mt-3' style={{ width: '40%' }}>
          <Sidebar />
        </div>

        <div className='w-full flex flex-col mt-16'>
          <div style={{ paddingLeft: '40%' }}>
            <Nav />
          </div>

          <div className='w-full ml-2 mt-2'
            style={{ background: '#fff', borderRadius: '20px', boxShadow: ' 0px 0px 0px 0px rgba(0, 0, 0, 0.25)', padding: '4% 6%' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/work' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
