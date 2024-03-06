
import { useState } from 'react'
import './App.css'
import { ModalComponent } from './Components/Modal'

function App() {

const [modalToggle,setModalToggle] = useState<boolean>(false)
const [imageSrc,setImageSrc] = useState<string>('')
const handleModalToggle = ()=>{
  setModalToggle(!modalToggle)
}
const handleProfilePictureUpdate = (imgSrc:string)=>{
  setImageSrc(imgSrc)
}
  return (
    <>
      <div className='h-screen w-full bg-gray-800 text-center'>
          <h2 className='text-3xl text-white py-8 font-bold'>Image Crop</h2>
          <div className="flex justify-center w-full">
          <div className="bg-gray-800  my-3 p-4 w-56" >
  <img className="object-cover h-48 w-full my-3 rounded-2xl hover:cursor-pointer" 
  onClick={handleModalToggle}
  src={imageSrc ? imageSrc : 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='}/>
</div>
      </div>
      
      </div>
      <ModalComponent handleModalToggle={modalToggle} handleProfilePictureUpdate={handleProfilePictureUpdate}/>
    </>
  )
}

export default App
