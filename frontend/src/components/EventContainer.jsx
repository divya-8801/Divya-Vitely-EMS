import React from 'react'
import Wrapper from '../assets/wrappers/EventContainer';
import Event from "./Event1";
import { useAllEventContext } from "../pages/EventList";


const EventContainer = () => {
  const { data } = useAllEventContext()
  const {events} = data
  if(events.length === 0)
  {
    return (
      <Wrapper>
        <h2>No Events to Display...</h2>
      </Wrapper>
    );
  }
  return (
  <Wrapper>
    <div className = 'events'>
      {events.map((event)=>{
        return <Event key={event._id}{...event}/>;
      })}
    </div>
  </Wrapper>
)
}

export default EventContainer