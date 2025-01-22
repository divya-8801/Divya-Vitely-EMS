import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect } from 'react-router-dom';

export const action = async({params})=>{
    try{
        await customFetch.delete(`/events/eventform/${params.id}`)
        toast.success('Event deleted successfully')
    } catch(error){
        toast.error(error?.response?.data?.msg)
    }
    return redirect('/eventlist')
}

export const DeletePage = () => {
  return (
    <div>Delete Page</div>
  )
}
