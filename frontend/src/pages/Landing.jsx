import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet  } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Logo } from '../components';
const Landing = () => {
  return (<Wrapper>
    <nav>
        <Logo/>
    </nav>
    <div className="container page">
        <div className='info'>
        <h2>
            Divya <span>Event Management</span> System
        </h2>
        <p>
        Welcome to the Event Management System! Our platform provides a seamless way to explore and manage events effortlessly. The homepage showcases a curated list of events, complete with essential details like descriptions and schedules. With an intuitive filter feature, you can easily sort events by categories to find exactly what interests you. Designed to be user-friendly and responsive, the homepage ensures a smooth experience whether you’re browsing from a desktop or mobile device. Dive in and discover events tailored to your preferences!
        </p>
        <Link to='/EventForm' className='btn register-link'>
            Create Event
          </Link>
          <Link to='/EventList' className='btn'>
            Event List
          </Link>
        </div>
        <img src={main} alt='event' className='img main-img' />
    </div>
    </Wrapper>)
}



export default Landing