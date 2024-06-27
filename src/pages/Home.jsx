
import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import View from '../components/View';
import Category from '../components/Category';

function Home() {
// state lifting state
const [addstatus,setAddStatus]=useState([])

const [dragStatus, setDragStatus]=useState(false)
  return (
    <>

<div className="d-flex mt-4 p-5">

{/* aaranvo data privide chyune avdek statechnge chyn ulla alle kodknm */}
<Add setAddStatus={setAddStatus}/>

<h5 className='ms-auto' > 
<Link to={'/watch-hisory'} className='text-white' style={{textDecoration:"none"}}> <span id='h'>Watch-History </span> <FontAwesomeIcon icon={faArrowRotateLeft} size="sm" className='ms-3' style={{color: "#08d47b",}} /></Link>
 </h5>
 </div>

<div className="row w-100 p-5">

<div className="col-md-9">
<h5>  All Videos</h5>

{/* aarano display chyth kanikndath ayalilki stateine kodknm */}
<View addstatus={addstatus} setDragStatus={setDragStatus}/>

</div>

<div className="col-md-3 ps-4">
<Category setDragStatus={setDragStatus} dragStatus={dragStatus}/>
</div>

</div>

    </>
  )
}

export default Home