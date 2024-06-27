
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistoryApi, deleteVideoApi } from '../services/allapi';

// videocardil statelifting chnge chyn ulla functione destructure chynu
function Videocard({ displayVideo,setDeleteVideoStatus,isPresent }) {
  
  console.log(displayVideo);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    
// all apilki add avunnathkannan
let caption = displayVideo?.caption
let url = displayVideo?.url
// time edkukunu
let time= new Date()
// Intl.DateTimeFormat object create chya
let timeStamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
console.log(timeStamp);
// backendilki body snd chynm
// body create chya
const reqBody ={
  caption, url,timeStamp
}

// apicall
const result = await addToHistoryApi(reqBody)
console.log(result);
  }


  // function crete chyunnu dlt aakn
  const handleDelete =async(id)=>{
  const result = await  deleteVideoApi(id)
  console.log(result);

  // load aavn dlt chyumbol 200 series aaneghil mathram
 if(result.status>=200 && result.status<300){
  setDeleteVideoStatus(result.data)
 }
  }

  
  // // drag chyn
  const videoDrag =(e,id)=>{
    console.log('card dragged is :', id);
    e.dataTransfer.setData("videoId",id)
  }
 

  return (
    <>
{/* drag chyunnu cardine */}
{/* draggable onDragStart = {(e)=>videoDrag(e,displayVideo?.id)} */}
      <Card style={{ width: '100%',height:'90%' }} className='mt-4 p-3' draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
        {!isPresent &&
          <Card.Img onClick={handleShow} variant="top" style={{ cursor: "pointer" }} src={displayVideo?.image} width={'100%'} height={'80%'} />}
        <Card.Body className='d-flex p-2 mt-2'>
          <Card.Text className=''>
            {displayVideo?.caption}
          </Card.Text>

          {/* dlt chyn onclick kodthu */}
         {!isPresent && <button className='btn  btn-danger ms-auto ' style={{height:'45px'}} onClick={()=>handleDelete(displayVideo?.id)}> <FontAwesomeIcon icon={faTrash} size="xs" style={{ color: "#020327", }} /> </button>}

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <Modal.Title> {displayVideo?.caption}</Modal.Title>
          
        </Modal.Header>
        <Modal.Body >
          <iframe width="100%" height="300" src={`${displayVideo?.url}?autoplay=1`} title="Turbo Malayalam Movie Official Trailer | Mammootty | Vysakh | Midhun Manuel Thomas |MammoottyKampany" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Videocard