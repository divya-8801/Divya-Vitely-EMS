import mongoose from 'mongoose';
import { CATEGORIES } from '../utils/constants.js';
const eventSchema = new mongoose.Schema({
    name:String,
    description:String,
    start_date_time: {
        type: String,
        required: true,
        default: Date.now,
    },
    end_date_time: {
        type: String,
        required: true,
        default: Date.now,
    },
    Categories:{
        type:String,
        enum:Object.values(CATEGORIES),
        default: CATEGORIES.IT,
    }
    
});

export default mongoose.model('Event', eventSchema);