
import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { ImageUpload } from './ImageUpload';
import 'react-image-crop/dist/ReactCrop.css'

interface ModalProps {
    handleModalToggle : boolean
    handleProfilePictureUpdate : (value:string) => void
}
export const ModalComponent:React.FC<ModalProps>= ({handleModalToggle,handleProfilePictureUpdate}) => {
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(()=>{
    //modal open close
    setOpenModal(handleModalToggle);
  },[handleModalToggle])

  return (
    <>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Select Image</Modal.Header>
        <Modal.Body>
       <ImageUpload handleProfilePictureUpdated={handleProfilePictureUpdate} handleModalToggle={()=>{setOpenModal(false)}}/>
        </Modal.Body>
        
      </Modal>
    </>
  );
}
