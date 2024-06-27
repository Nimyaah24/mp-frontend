

// videosine add chyn ulla function create chyunu

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


// ee function aan add component call chyune
// add componentil call chyneghil export chynm
export const addVideoApi =async (reqbody)=>{
// data kittaneghil return kodknm
    // api call
    // commonapi aathym povm varunne req post req aan methodil ath attach chym 
    // serverurl paranjal index.jsilki connection povm
    // videosil poyitt store aavnm
    // bodyil reqbody attach aavm
  return await commonApi('POST',`${serverUrl}/videos`,reqbody)
}


// get all videos
// getVideoApi call chyunnath view component aan
export const getVideoApi = async()=>{
  // get data edkn
  return await commonApi('GET',`${serverUrl}/videos`,"")
}


// Deleting videos
// deleteVideoApi to delete a video
export const deleteVideoApi =async(id)=>{
  //unique aayt id vech dlt aakunnu eeth video aano dlt aaknde ath
  // objectine aan empty aaknde athond empty object{}
return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}


// youtube video view chymbol ath view chythitt indnn watch historyil kaniknm
// addToHistoryApi to add video to watch history
export const addToHistoryApi = async(reqbody)=>{
return await commonApi('POST',`${serverUrl}/history/`,reqbody)
}

// historyilnn view chytha datasine get chyunnu
//getVideoFromHistoryApi to get video from watch history
export const getVideoFromHistoryApi = async()=>{
  return await commonApi('GET',`${serverUrl}/history`,"")
}

// watchhistory tableilnn datasine dlt aakan
// deleteVideoFromHistoryApi to delete video from history
export const deleteVideoFromHistoryApi = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

// addCategoryApi to add cagegory
export const addCategoryApi = async(reqbody)=>{
  return await commonApi('POST',`${serverUrl}/category`,reqbody)
}

// AllCategoryApi to get all category
export const AllCategoryApi = async()=>{
return await commonApi ('GET',`${serverUrl}/category`,"")
}

//  to delete category
export const deleteCategoryApi = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

// api to get a video
export const AvideoApi = async(id)=>{
  return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}

// to update category backentil
export const updateCategoryApi = async (id,reqBody)=>{
  return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}
