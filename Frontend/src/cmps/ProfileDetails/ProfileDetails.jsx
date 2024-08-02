import { CiImageOn } from 'react-icons/ci'
import { useParams } from 'react-router-dom'
import { ProfileInputs } from './ProfileInputs'
import { useState } from 'react';
import { ImagePick } from './ImagePick';
import { useSelector } from 'react-redux';
import { savePersonalDetails } from '../../store/actions/links.actions';

export function ProfileDetails() {
  // const params = useParams()
  const personalDetails = useSelector((state) => state.personalDetails);
  const [detailsToEdit, setDetailsToEdit] = useState({...personalDetails});
  const [pickedImage, setPickedImage] = useState(null);
  console.log('detailsToEdit:', detailsToEdit)
  console.log('personalDetails:', personalDetails)
  
  function onSavePersonalDetails(){
    savePersonalDetails(detailsToEdit)
  }

  function handleChange({target}) {
    const {name,value} = target    
    setDetailsToEdit({...detailsToEdit, [name]: value})
  }
  
  return (
    <div className="px-10 pt-11 flex flex-col bg-white rounded-md w-full h-full items-start">
      <h1 className="font-bold text-3xl mb-4">Profile Details</h1>
      <h4 className="font-extralight text-slate-400 mb-8">
        Add your details to create a personal touch to your profile
      </h4>
      <ImagePick />
      <ProfileInputs {...detailsToEdit} handleChange={handleChange}/>
      <hr className='h-[3px] w-full mb-4'/>
      <button onClick={onSavePersonalDetails} className='main-btn'>Save</button>
    </div>
  )
}
