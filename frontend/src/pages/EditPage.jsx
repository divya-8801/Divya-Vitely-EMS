import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/EditPage';
import { useLoaderData } from 'react-router-dom';
import { CATEGORIES } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params}) => {
  try{
    const {data} = await customFetch.get(`/events/eventform/${params.id}`)
    return data
  } catch(error){
    toast.error(error?.response?.data?.msg)
    return redirect('/eventform');
  }
};
export const action = async ({request, params}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try{
    await customFetch.patch(`/events/eventform/${params.id}`,data)
    toast.success("Edited Successfully")
    return redirect('/eventlist/')
  } catch(error){
    toast.error(error?.response?.data?.msg);
    return error
  }

};

const EditPage = () => {
  const {event} = useLoaderData();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Edit Page</h4>
        <div className='form-center'>
          <FormRow type='text' name='name' defaultValue={event.name}/>
          <FormRow type='text' name='description' defaultValue={event.description}/>
          <FormRow type='date' name='start_date_time' defaultValue={event.start_date_time}/>
          <FormRow type='date' name='end_date_time' defaultValue={event.end_date_time}/>
          <FormRowSelect name='Categories' labelText='Categories'
           defaultValue={event.Categories} list={Object.values(CATEGORIES)}/>
          <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>
          {isSubmitting? 'submitting....':'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  )
  console.log(event);
  
};
export default EditPage;