
import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { ImageUpload } from './ImageUpload';

interface ModalProps {
    handleModalToggle : boolean
}
export const ModalComponent:React.FC<ModalProps>= ({handleModalToggle}) => {
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
       <ImageUpload/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
