
import { faArrowLeft,  faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoFromHistoryApi, getVideoFromHistoryApi } from '../services/allapi'

function Watchhistory() {
// stateilki store chynm
const [videoHistory, setVideoHistory]=useState([])
// watchhistory table data dlt aakunne automatically chyn
const [deleteStatus,setDeleteStatus] =useState([])


// datas watchhistoryilki get chyn
const getHistory = async()=>{
  const result = await getVideoFromHistoryApi()
  // console.log(result);
  // data vannal
  if(result.status>=200 && result.status<300){
    setVideoHistory(result.data)
  }
}
console.log(videoHistory);


useEffect(()=>{
getHistory()
},[deleteStatus])




// watchhistory tableilnn datasine dlt aakan function create cheyunnu
const deleteHistory =async (id)=>{
const result=await deleteVideoFromHistoryApi(id)
console.log(result);
setDeleteStatus(result.data)
}


  return (
    <>
  <div className="d-flex p-3 mt-5 w-100 mb-4">
<h5 className='ms-md-5 fw-bolder'>Watch-History</h5>
<h5 className='ms-auto me-md-5'><Link to={'/home'} className='text-white' style={{textDecoration:"none"}}><FontAwesomeIcon icon={faArrowLeft} size="lg" className='me-2' style={{color: "#0ba298",}} /><span id='h'>Back to home</span></Link></h5>

  </div>

<div className="row w-100 mt-5 p-2">

<div className="col-md-2"></div>

<div className="col-md-8 ">


{/* onughil table alleghi watch history */}
{/* conditionally render chyunnu {} ullil rap chyunnu */}
  {videoHistory?.length>0?
    <table className='table table-bordered table-light'>
<thead>
<tr>
  <th>Sno</th>
  <th>Caption</th>
  <th>Url</th>
  <th>Time Stamp</th>
  <th className='text-center'>Action</th>
</tr>
</thead>

<tbody>
  {/* row multiply chyunnu nmmldel ethre video undo athre vare */}
  {/* also content koodi display chyunnu */}
{videoHistory?.map((item,index)=>(
    <tr>
    <td>{index+1}</td>
    <td>{item?.caption}</td>

    {/* url link aaykn Link tage use chythu , veroru tapil open avn target='_blank' koduthu */}
    <td>
    <a href={item?.url} target="_blank"> {item?.url}</a>
    </td>

    <td>{item?.timeStamp}</td>
    <td className='text-center'>
      <button className='btn btn-info'style={{cursor:"pointer"}} onClick={()=>deleteHistory(item.id)}><FontAwesomeIcon icon={faTrashCan} size="sm" style={{color: "#020812"}} /></button>
      </td>
  </tr>
  ))}
 
</tbody>
  </table>
:
<p className='text-warning fs-5'>No Watch History</p>
}


</div>

<div className="col-md-2"></div>

</div>

    </>
  )
}

export default Watchhistory