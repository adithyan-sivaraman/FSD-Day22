/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import './Style.css'
import image from './assets/profile.svg'
import rocket from './assets/rocket.svg'
import Card from './Components/Card';
import EarningCard from './Components/Card/ECard';
import RevenueCard from './Components/Card/RCard';
import ProgressBar from './Components/Others/Progress';
import MultiCard from './Components/Others/MultiCard';
import Illustrations from './Components/Others/Illustration';
import Development from './Components/Others/Developmet';
import React,{useState} from 'react';

function App() {
  const [isActive,setActive] = useState(null)
  
  const handleClick = (elementId) =>{
    if (elementId === isActive) {
      setActive(null); // Close the clicked element if already active
    } else {
      setActive(elementId); // Open the clicked element
    }
  }
  
  return (
    <div className="App">
      <div className='min-h-screen w-screen flex'>
        <div className='w-24 md:w-56 min-h-screen sidebar  '>
          <a className='flex items-center justify-center text-base font-extrabold text-white px-4 py-6 a-1' >
            <div className='sidebar-brand rotate-n-15'><i className="fas fa-laugh-wink icon"></i></div>
            <div className='hidden md:inline ml-4'>SB ADMIN<sup className='font-extrabold'>2</sup></div>
          </a>
          <hr className='border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0' />
          <a className='flex items-start justify-start text-base font-extrabold text-white md:px-4 md:py-2 ' >
            <div className='sidebar-brand flex flex-col md:flex-row justify-evenly items-center mt-0 md:mt-2 w-full'>
              <i className="fas fa-fw fa-tachometer-alt text-sm w-1/10 text-center"></i>
              <span className="text-xs md:text-base font-bold mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4">Dashboard</span>
            </div>

          </a>
          <hr className='border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0' />
          <div className='sidebar-brand flex flex-col md:flex-row justify-center md:justify-start items-center text-white text-xs mt-4 md:ml-4 font-light'>INTERFACE</div>
          <div className='flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer'  onClick={()=>handleClick('div1')}>
            <div className='sidebar-brand flex flex-col md:flex-row justify-evenly items-center mt-0 md:mt-2 w-full'>
              <i className="fas fa-fw fa-cog w-1/10 text-center"></i>
              <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4">Components</span>
              <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
              
            </div>
            {isActive==="div1" && (
              <div  className='flex flex-col bg-white mt-2 rounded-md  w-full justify-start'>
            <h6 className="collapse-header">Custom Components:</h6>
            <p className="collapse-item">Buttons</p>
            <p className="collapse-item">Cards</p>
            </div>
            )}
          </div>
          <div className='flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer' onClick={()=>handleClick('div2')}>
            <div className='sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full'>
              <i className="fas fa-fw fa-cog w-1/10 text-left"></i>
              <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4">Utilities</span>
              <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
            </div>
          {isActive==="div2" && (
            <div className='flex-col bg-white mt-2 rounded-md  w-full'>
            <h6 className="collapse-header">Custom Utilities:</h6>
            <p className="collapse-item">Colors</p>
            <p className="collapse-item">Borders</p>
            <p className="collapse-item">Animation</p>
            <p className="collapse-item">Other</p>
            </div>
          )}
          </div>
          <hr className='border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0' />
          <div className='sidebar-brand flex flex-col md:flex-row justify-center md:justify-start items-center text-white text-xs mt-4 md:ml-4 font-light'>ADDONS</div>
          <div className='flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer'onClick={()=>handleClick('div3')}>
            <div className='sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full'>
              <i className="fas fa-fw fa-folder w-1/10 text-left"></i>
              <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4">Pages</span>
              <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
            </div>
            {isActive==="div3" && (
              <div className='flex flex-col bg-white mt-2 rounded-md  w-full'>
            <h6 className="collapse-header">Login Screens:</h6>
            <p className="collapse-item">Login</p>
            <p className="collapse-item">Register</p>
            <p className="collapse-item">Forgot</p>
            <h6 className="collapse-header">Other Pages:</h6>
            <p className="collapse-item">404 Page</p>
            <p className="collapse-item">Blank Page</p>
            </div>
            )}
          </div>
          <div className='flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer'>
            <div className='sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full'>
              <i className="fas fa-fw fa-chart-area w-1/10 text-left"></i>
              <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4">Charts</span>
              
            </div>
          </div>
          <div className='flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer' >
            <div className='sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full'>
              <i className="fas fa-fw fa-table w-1/10 text-left"></i>
              <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4">Tables</span>
            </div>
          </div>

          <hr className='border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0' />
          <div className='text-center hidden md:flex items-center justify-center mt-4 '>
            <button className='rounded-full text-white w-10 h-10 button' type='button' id="toggleBtn">
            
            </button>

          </div>
          <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src={rocket} alt="..."/>
                <p class="text-center mb-2 text-xs color"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>
        </div>
        <div className=' border-blue-300 content'>

          <nav className='a-1 shadow bg-white py-2 px-4 w-full flex flex-row items-center justify-center'>
            <button id="sidebarToggleTop" className="block md:hidden btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>
            <div className='w-1/2 flex justify-center items-center h-full'>
              <form className='hidden md:inline-block md:ml-4 !mr-auto !mt-2 w-full a-1 h-full'>
                <input type='text' className='text-sm input-group h-1/2 w-4/5 px-4 rounded-md input mt-2' placeholder='Search for ...' />
                <div className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </div>
              </form>
            </div>
            <div className='w-1/2 flex flex-row justify-end items-center nav'>
              <a className='a-1 flex items-center px-3' role='button'>
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter ml-1">3+</span>
              </a>
              <a className='a-1 flex items-center px-3' role='button'>
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter ml-2">7</span>
              </a>
              <div className="topbar-divider hidden md:block"></div>
              <a className='a-1 flex items-center px-3' role='button'>
                <span className='hidden lg:inline'>Adithyan S</span>
                <img className="img-profile rounded-full w-8 h-8 ml-2" src={image} alt='' />
              </a>
            </div>
          </nav>
          <div className='flex flex-row px-6 mt-2  items-center justify-between'>
            <h1 className="h3 mb-0 text-gray-800 font-normal w-3/5">Dashboard</h1>
            <a href="#" className="hidden  sm:flex btn btn-sm btn-primary shadow-sm justify-center border-2 text-xs w-auto">
              <i className="fas fa-download fa-sm text-white mt-2 px-2"></i> Generate Report
            </a>
          </div>

          {/*render card component here*/}
          <Card />
          <div className="row px-4 ml-2 mt-4">
            <EarningCard />
            <RevenueCard />

          </div>
          <div className='flex flex-col lg:flex-row w-full'>
            <div className='flex flex-col w-full'>
              <ProgressBar />
              <MultiCard />
            </div>
            <div className='flex flex-col w-full'>
              <Illustrations />
              <Development />
            </div>
          </div>

          <div>

          </div>
          <div className='flex bg-white h-12 items-center justify-center flex-row px-4'>
            <footer className="sticky-footer bg-white w-4/5">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2023</span>
                </div>
              </div>
            </footer>
            <a className="scroll-to-top rounded-md" href="#page">
              <i className="fas fa-angle-up"></i>
            </a>
          </div>
        </div>


      </div>

    </div>
  );
}

export default App;
