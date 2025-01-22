import React from 'react'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Event';
import EventInfo from './EventInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);
const Event = ({
    _id,name,description,start_date_time,end_date_time,Categories})=> {
      return (
            <Wrapper>
                <header>
                    <div className='main-icon'>
                        {name.charAt(0)}
                    </div>
                    <div className='info'>
                        <h5>{name}</h5>
                        <h5>{start_date_time}</h5>
                        <h5>{end_date_time}</h5>
                        <h5>{Categories}</h5>
                        <p>{description}</p>
                    </div>
                </header>
                <div className='content'>

        <footer className='actions'>
        <Link to={`/edit-job/${_id}`} className='btn edit-btn'>
            Edit
          </Link>
        <Form method='post' action={`../delete-page/${_id}`}>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
            </Wrapper>
  );
}

export default Event