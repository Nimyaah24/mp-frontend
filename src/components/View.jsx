
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { AllCategoryApi, getVideoApi, updateCategoryApi } from '../services/allapi'


// destructing statelifting
function View({addstatus,setDragStatus}) {

  // array empty aay set chythu
  const [videoDetails,setVideoDetails] = useState([])

  // auto matically dlt aayt ponm card so state create chynu
  // props use chythan pattila parent to child data share chyn pattum child to parent chyn pattila
const [deleteVideoStatus,setDeleteVideoStatus]=useState([])

// api call
const getVideo = async()=>{
  const result = await getVideoApi()
  // setvideok datane kond vannu
  setVideoDetails(result.data)
} 


const DragOver=(e)=>{
  e.preventDefault()
}

const videoDrop=async(e)=>{
 const {videoId,CategoryId}=JSON.parse(e.dataTransfer.getData("dataShared"))
 console.log(videoId , CategoryId);

//  get all category
const {data} = await AllCategoryApi()
console.log(data);

// // get selected category
const selectedCategory =data.find((item)=>item.id==CategoryId)
console.log(selectedCategory);

// // remove video from the selected category
const result = selectedCategory.allVideo.filter((item)=>item.id != videoId)

const reqBody ={
  CategoryName: selectedCategory.CategoryName,
  allVideo: result,
  id: selectedCategory.id
}
await updateCategoryApi(CategoryId,reqBody)
setDragStatus(true)
}

// page load aavumbho data kittnm
// function mustbe load 
// array data aayt consoleil varm

useEffect(()=>{
getVideo()
// page load aavumbzhm stateinte value chnge aavumbzhm getvideo call aavm means page refresh chynd varm upload chythath
},[addstatus ,deleteVideoStatus])

console.log(videoDetails);


  return (
    <>
     {/* output should only depend on argument. */}
     {/* data losse prevent chyn dragover */}
    <Row className='w-100 mt-5 ms-3 ms-md-0 ' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>
     
{/* conditionaly render chyun */}

{/* col 0 aaneghil p tagine kannika col 1 aaneghil col kanika */}
{videoDetails?.length>0?videoDetails?.map((item)=>(

  // {/* ethre data indo ath col aayt multiply chynm */}

<Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>

{/* stateine chnge chyn ulla functione video cardilki kodknu */}
<Videocard displayVideo ={item} setDeleteVideoStatus={setDeleteVideoStatus}/>

</Col>
))

:
// {/* video kerathe tymil video illeghil */}
<p className='mt-4 text-warning fs-5 p-4'>No video yet uploaded...</p>

}

</Row>

    </>
  )
}

export default View