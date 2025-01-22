import React from 'react'
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/EventForm'
import customFetch from '../utils/customFetch';
import {toast} from 'react-toastify'
export const action = async({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try{
    await customFetch.post('/events/eventform',data);
    toast.success("Event Created Successfully");
    return null;
  }catch(error)
  {
    toast.error(error?.response?.data?.msg);
    return error
  }
}
const EventForm = () => {
  return (
    <Wrapper>
        <Form method='post' className='form'>
            <Logo/>
            <h4>Create Event</h4>
            
    {/* Event Name */}
    <FormRow type='text' name='name'/>
    {/* Event Description */}
    <FormRow type='text' name='description'/>
    {/* Event Start Date and Time */}
    <FormRow type='date' name='start_date_time'/>
    {/* Event End Date and Time */}
    <FormRow type='Date' name='end_date_time'/>
    {/* Event Categories */}
      <div className="form-row">
        <label htmlFor="categories" className="form-label">
          Categories
        </label>
        <select
        id="categories"
        name="Categories"
        className="form-input"
        required
      >
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-block">
        Submit
      </button>

      {/* Back to Home Page */}
      <p>
        <Link to="/" className="member-btn">
          Back to Home Page
        </Link>
      </p>
    </Form>
    </Wrapper>
  )
}

export default EventForm;