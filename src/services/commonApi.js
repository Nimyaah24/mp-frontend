

import axios from "axios"

// functionte agathan functione call chythitt ulle
// axiosinte ullilki data varneghil functionte aeg aayt data varnm

// ajax variablesine store chyn hlp chym(varunna resultine)
// api calls varunnath evdyo avde async
export const commonApi = async(httpRequest , url , reqBody ) =>{

    let reqConfig ={

        method:httpRequest,
        // keyum valueum same aaneghil orale kodtha mathy
        url,
        data:reqBody,
        // content type
        headers:{"Content-Type":'application/json'}

    }

    // functionte agath aan contents oke porath access chynrghil return kodkndi varm
    // aarano api call nadathunne avde await
   return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })


}