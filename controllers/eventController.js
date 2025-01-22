import Event from '../models/eventModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../Errors/customeErrors.js';

export const getAllEvents = async (req,res)=>{
    const events = await Event.find({})
    res.status(StatusCodes.OK).json({events});
};

export const createEvent = async (req, res) => {
    const { name, description, start_date_time, end_date_time, Categories } = req.body;
    const event = await Event.create({name, description, start_date_time, end_date_time, Categories});
    res.status(StatusCodes.CREATED).json({ event });
  };

export const getEvent = async (req,res) =>{
    const {id} = req.params
    const event = await Job.findById(id)
    if(!event) throw new NotFoundError(`no job with id ${id}`);
    res.status(StatusCodes.OK).json({event});
  };

export const updateEvent = async (req, res) => {
    const { id } = req.params;

    const updatedEvent = await Event.findByIdAndUpdate(id,req.body,{
        new:true
    });
    if (!updatedEvent) throw new NotFoundError(`no job with id ${id}`);
  
    res.status(StatusCodes.OK).json({ msg: 'event modified', event });
  };

export const deleteEvent = async (req, res) => {
    const { id } = req.params;
    const removedEvent = await Event.findByIdAndDelete(id)
    if (!removedEvent) throw new NotFoundError(`no job with id ${id}`);
  
    res.status(StatusCodes.OK).json({ msg: 'event deleted' });
  };
  
 