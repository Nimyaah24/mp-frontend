
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// homeile keyne destructure chythu statelifting
function Add({setAddStatus}) {
  
  // create a  state 6o hold data from input fileld '/home'->uplpad video
  // single stateil hold chyune
  // object aayt saan state create chyune because arrayt store chythal kodvarne data ndhan manasilavila
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    url: ""
  })



  const validateLink = (e) => {
    console.log(e.target.value)

    const link = e.target.value

    // youtube video link set chyth embeded chynu
    if (link.endsWith('?si=qR4OOmvjVyjmWVdN')) {
      const ykey = link.slice(-32, -15)
      // embeded linkinayt attach chythu
      let embedLink = ` https://www.youtube.com/embed/${ykey}`
      setVideo({ ...video, url: embedLink })

    }
    else if(link.startsWith('https://youtu.be')){
      const ykey=link.slice(17,28)
      console.log(ykey);
      let embedLink = ` https://www.youtube.com/embed/${ykey}`
      setVideo({ ...video, url: embedLink })

    }
    else {
      const ykey = link.slice(-11)
      let embedLink = ` https://www.youtube.com/embed/${ykey}`
      setVideo({ ...video, url: embedLink })
    }

  }



  // 3 linkil common aay varunne select chyann (unique key) 11 key indavm
  // https://youtu.be/LOE8ESPIMpE?si=qR4OOmvjVyjmWVdN
  // https://www.youtube.com/watch?v=LOE8ESPIMpE
  // https://www.youtube.com/embed/LOE8ESPIMpE

  // <iframe width="996" height="560" src="https://www.youtube.com/embed/LOE8ESPIMpE" title="Turbo Malayalam Movie Official Trailer | Mammootty | Vysakh | Midhun Manuel Thomas |MammoottyKampany" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

 

  const [show, setShow] = useState(false);

  const handleClose = () =>{
// modal close aavn
    setShow(false);
    // state empty aavn
    setVideo({
      caption: "",
      image: "",
      url: ""
    })
 
  } 


  const handleShow = () => setShow(true);

  console.log(video);


const handleUpload =async (e)=>{
  // datas lose aavndirikn preventDefault call chyunu
e.preventDefault()

// destructuring
const {caption , image ,url}= video

// fullyfilled aanon check chunu
if(!caption || !image || !url){
  toast.dark('please fill the form completely')
}
else{
  // fill aayal api call vilikn
  // data oke fill aayt indeghil call chynm
  // request body video
  // asyncawait use chyunnod resultilki store chynu kannan console chyunnu
   const result =   await addVideoApi(video)
   console.log(result);
   if(result.status>=200 && result.status<300){
    // adil alert style chythath toast
    toast.info('video uploaded successfully')
    // state change aavm successfull ithil kodthal
    setAddStatus(result.data)
    handleClose()
   }
   else{
    toast.error('something went wrong')
    console.log(result);
    handleClose()
   }
}
}

  return (
    <>

      <div className="d-flex align-items-center  ">
        <h5 className='' ><span id='h'>Upload New Video </span><button className='btn mb-2' onClick={handleShow}> <FontAwesomeIcon icon={faCloudArrowUp} size="xl" style={{ color: "#a81605", }} /></button></h5>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'> <FontAwesomeIcon icon={faFilm} size="sm" style={{ color: "#054394", }} /> Upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>

          <form className='border p-4 rounded border-secondary'>
            {/*... rest operator chyunnu karnm bakki ulla conteine atth pole thannem chnge chyunnathine change aki tharm */}
            <input type="text" placeholder='Video Caption'  onChange={(e) => setVideo({ ...video, caption: e.target.value })} className='form-control' />
            <input type="text" placeholder='Video Image'  onChange={(e) => setVideo({ ...video, image: e.target.value })} className='form-control mt-3' />
{/* embeded link aayond superate functione call chyunu */}
            {/*validateLink functione mukkalil define chyunnu  */}
            <input type="text" placeholder='Video url' onChange={(e) => validateLink(e)} className='form-control mt-3' />


          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      {/* alertinte theme set chya */}
      <ToastContainer theme='colored' position='top-center' autoClose={3000}/>

    </>
  )
}

export default Add