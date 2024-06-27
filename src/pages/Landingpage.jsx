
import Card from 'react-bootstrap/Card';
import React from 'react'
import { Link } from 'react-router-dom';

function Landingpage() {
  return (

    <>
      {/* welcome page */}
      <div className="row w-100 d-flex justify-content-center align-items-center p-4" >

        <div className="col-md-1"></div>

        <div className="col-md-5 p-5 " >
          <h4>Welcome to <span className='text-info'>Media Player</span> </h4>
          <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem soluta ullam quod alias similique optio voluptas natus, magnam voluptates consequatur itaque eos reprehenderit enim totam tempore. Tempore, earum quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <button className='btn btn-primary rounded mt-4'><Link to={'/home'} style={{textDecoration:'none',color:"white"}}>Get Started</Link></button>
        </div>

        <div className="col-md-5   d-flex justify-content-center align-items-center p-5">
          <img src="https://cdn.kibrispdr.org/data/1790/music-logo-gif-22.gif" alt="no image" className='w-100 ' />
        </div>

        <div className="col-md-1"></div>

      </div>

      {/* features */}
      <div className="row w-100 mt-2 d-flex justify-content-center align-items-center p-4 ">

        <h4 className='mt-5 text-center text-white mb-5'>Features</h4>

        <div className="col-md-1  ms-md-5"></div>

        <div className="col-md-3 p-4 d-flex justify-content-center align-items-center">
          <Card style={{ width: '80%' }} className='p-2'>
            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/58bb3e5e59cc68b969605ae7/1607897245260-L7L4K8346KCQTA71C5JW/ezgif.com-video-to-gif.gif?format=2500w" className='w-100' height={'200px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card></div>

        <div className="col-md-3 p-4 d-flex justify-content-center align-items-center">
          <Card style={{ width: '80%' }} className='p-2 '>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1111127/screenshots/3988788/audio.gif" className='w-100' height={'200px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 p-4 d-flex justify-content-center align-items-center">
          <Card style={{ width: '80%' }} className='p-2 '>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/d7/28/26/d728264b7433e62b7c4572c8d129e9be.gif" className='w-100' height={'200px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-1 ms-md-5"></div>

      </div>

      {/* youtube */}
      <div className="row mt-5 mb-5 p-4">

<div className="col-md-1"></div>

<div className="col-md-10 border border-4 p-5 rounded border-light ">
  
<div className="row w-100 p-4">

<div className="col-md-6  p-3 ">

  <h4 className='text-warning'>Simple Fast  & Powerful</h4>

  <p className='mt-3' style={{ textAlign: "justify" }}>
  <span className="text-info fw-bolder fs-5">Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero consequuntur excepturi deserunt non deleniti autem distinctio unde facere assumenda obcaecati voluptate ad impedit, odio nisi, dolores, veniam facilis itaque.
  </p>
  <p className='mt-3' style={{ textAlign: "justify" }}>
  <span className="text-success fw-bolder fs-5">Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero consequuntur excepturi deserunt non deleniti autem distinctio unde facere assumenda obcaecati voluptate ad impedit, odio nisi, dolores, veniam facilis itaque.
  </p>
  <p className='mt-3' style={{ textAlign: "justify" }}>
  <span className="text-danger fw-bolder fs-5">Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero consequuntur excepturi deserunt non deleniti autem distinctio unde facere assumenda obcaecati voluptate ad impedit, odio nisi, dolores, veniam facilis itaque.
  </p>

</div>

<div className="col-md-6 p-3">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/id848Ww1YLo" title="Manjummel Boys - Trailer | Chidambaram | Soubin Shahir, Sreenath Bhasi | Sushin Shyam | Parava Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>

</div>

<div className="col-md-1"></div>

      </div>
    </>

  )
}

export default Landingpage