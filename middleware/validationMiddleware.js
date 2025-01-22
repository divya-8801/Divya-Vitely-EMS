import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../Errors/customeErrors.js";
import { CATEGORIES } from "../utils/constants.js";
import mongoose from "mongoose";
import Event from '../models/eventModel.js'
const withValidationErrors = (validateValues) =>{
    return  [validateValues,
        (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
          const errorMessages = errors.array().map((error)=>error.msg)
          throw new BadRequestError(errorMessages);
        }
        next()
    },
    ];
}

export const validateEventInput = withValidationErrors([
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('start_date_time').notEmpty().withMessage('Date is required'),
    body('Categories').isIn(Object.values(CATEGORIES)).withMessage('invalid values'),
])

export const validateIdParam = withValidationErrors([
    param('id')
    .custom(async (value) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if(!isValidId) throw new BadRequestError('invalid id');
        const event = await Event.findById(value);
        if(!event) throw new NotFoundError('not found')
    }),
]);