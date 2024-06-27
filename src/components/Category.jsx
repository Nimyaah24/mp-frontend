
import { faPen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import Videocard from './Videocard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AllCategoryApi, AvideoApi, addCategoryApi, deleteCategoryApi, updateCategoryApi } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';

function Category({setDragStatus,dragStatus}) {

  const [show, setShow] = useState(false);

  const [CategoryName, setCategoryName] = useState("")

  const [allCategory, setAllCategory] = useState([])

  const [addStatus, setAddStatus] = useState(false)


  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }

  const handleShow = () => setShow(true);


  // function creation for add category
  const addCategory = async () => {
    // CategoryName indeghil
    if (CategoryName) {
      const reqbody = {
        CategoryName,
        allVideo: []
      }
      const result = await addCategoryApi(reqbody)
      console.log(result);
      // successfull aaneghil close aavnm category modal
      if (result.status >= 200 && result.status < 300) {
        setAddStatus(true)
        handleClose()
        toast.dark('Category Added Succesfully')
      } else {
        console.log(result);
      }
    }
    else {
      toast.info('Please Add the Category Name')
    }
  }

  // categoryile datasine get chyunnu
  const getAllCategory = async () => {
    const result = await AllCategoryApi()
    console.log(result);

    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data)
      setDragStatus(false)
    }
  }
  console.log(allCategory);


  const delCategory = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log(result);
    getAllCategory()
  }


  // over
  const DragOver = (e) => {
    e.preventDefault()
  }


  const videoDrop = async (e, CategoryId) => {
    console.log(`category id is: ${CategoryId}`);
    // accesing video id from view component
    const videoId = e.dataTransfer.getData("videoId")
    console.log("video is :", videoId);
    // get the video fetails from backent
    const { data } = await AvideoApi(videoId)
    console.log(data);


    // category datas kittan vndit
    const selectedCategory = allCategory.find((item) => item.id == CategoryId)


    // oru vattam oru video push chyn padolu content illeghil push chya otherwise not possible
    if (selectedCategory.allVideo.find((item) => item.id == data.id)) {
      toast.dark('video already exist in category')
    } else {
      // datane push chya selectedCategoryilki
      selectedCategory.allVideo.push(data)
      await updateCategoryApi(CategoryId, selectedCategory)
      getAllCategory()
    }


  }
  console.log(allCategory);


const DragStart =(e,videoId,CategoryId)=>{
console.log(videoId);
console.log(CategoryId);
// delete from the particular category
let dataShare={
  videoId,
  CategoryId
}
// dataShare is a string
// share chyne tymil string aayiriknm datas
e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
}



  useEffect(() => {
   
    // state chnge chyn vnditn false koduthe
    setAddStatus(false)
    getAllCategory()
  
  }, [addStatus , dragStatus])





  return (
    <>
      <div className='w-100 mt-md-1 mt-5  p-4 border border-secondary '>
        <button className='btn btn-info w-100' onClick={handleShow}>Add New Category <FontAwesomeIcon className='ms-3' icon={faPlus} size="sm" style={{ color: "#000000", }} /> </button>
      </div>

      {allCategory?.length > 0 ?

        // multiply aavn category add aayth
        allCategory?.map((item) => (

          // drop and over set chyunu
          <div className="mt-md-5 mt-2 " droppable onDragOver={(e) => DragOver(e)} onDrop={(e) => videoDrop(e, item.id)}>

            <div className="border border-secondary mt-3 rounded p-4  ms-md-0" >
              <div className="d-flex ">
                {/* nmml type chytha content vannit indavm */}
                <h6>{item.CategoryName}</h6>
                <button className='btn btn-secondary ms-auto' onClick={() => delCategory(item.id)}><FontAwesomeIcon icon={faTrashCan} size="sm" style={{ color: "#000000", }} /></button>
              </div>

              <Row>
                {item?.allVideo?.length > 0 ?
                  item?.allVideo?.map((videoItem) => (
                    <Col sm={12} draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}>
                      <Videocard displayVideo={videoItem} isPresent={true}/>
                    </Col>
                  ))
                  : null
                }
              </Row>

            </div>
          </div>
        ))
        :
        null

      }


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPen} size="sm" className='me-3' style={{ color: "#d15a0a", }} />Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form className='border rounded p-3 border-secondary '>
            <h6 className='text-secondary'>Category Name</h6>
            <input type="text" placeholder='Enter the Category Name' className='form-control mb-4 mt-4' onChange={(e) => setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={3000} />
    </>
  )
}

export default Category
