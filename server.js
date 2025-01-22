import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import eventRouter from './routes/eventRouter.js'
import 'express-async-errors';
import { body, validationResult } from 'express-validator';

//comment
app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

// Middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
if(process.env.NODE_ENV === 'development')
{
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.use('/api/v1/events',eventRouter);
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});


app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try{
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port,()=>{
    console.log(`server running on PORT ${port}...`);
  });  
} catch(error){
  console.log(error);
  process.exit(1);
}

