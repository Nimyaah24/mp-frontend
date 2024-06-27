
import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>

            <div className="row  mb-5">

                <div className="col-md-1"></div>

                <div className="col-md-3 mt-4 p-5">

                    <h5><FontAwesomeIcon icon={faVideo} size="sm" style={{ color: "#f28e31", }} /> Media Player</h5>
                    <p style={{ textAlign: "justify" }} className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, facilis? Rerum ipsam odit minima necessitatibus repellat saepe sequi nam provident, incidunt non sunt dolorum dolore dolorem nostrum, temporibus explicabo! Dignissimos?
                    </p>
                </div>

                <div className="col-md-2 p-5 justify-content-center d-md-flex mt-4">

                    <div>
                        <h5>Links</h5>
                        <p className='mt-4'> <Link to={'/'}>Landing Page</Link></p>
                        <p><Link to={'/home'}> Home Page</Link></p>
                        <p><Link to={'/watch-hisory'}>Watch History</Link></p>
                    </div>

                </div>

                <div className="col-md-2 p-5 mt-4">

                    <h5>Guides</h5>
                    <p className='mt-4'>React </p>
                    <p>React Bootstrap</p>
                    <p>Bootswatch</p>
                </div>

                <div className="col-md-3 p-5 mt-4 " >

                    <h5>Contact Us</h5>
                    <div className='d-flex mt-4'>
                        <input type="text" className='form-control ' placeholder='Email Id' />
                        <button className='btn btn-warning ms-3'>Subscribe</button>
                    </div>

<div className="d-flex mt-5 justify-content-between">

<FontAwesomeIcon icon={faInstagram} size="xl" />
<FontAwesomeIcon icon={faFacebook} size="xl" />
<FontAwesomeIcon icon={faTwitter} size="xl" />
<FontAwesomeIcon icon={faLinkedin} size="xl" />

</div>

                </div>

                <div className="col-md-1"></div>

            </div>

        </>
    )
}

export default Footer