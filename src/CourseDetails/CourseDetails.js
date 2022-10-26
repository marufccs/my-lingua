import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {id, img,title, details, duration, price} = courseDetails;
    console.log(courseDetails);
    return (
        <div>
            <img className='img-fluid' src={img}></img>
            <h1 className='mt-2'>{title}</h1>
            <p className='mx-auto details'>{details}</p>
            <div className='d-flex justify-content-between mx-3 price'>
            <div>
<span> Duration : {duration}</span>
            </div>
            <div>
<span>Price: €{price}</span>
            </div>
        </div>
        <div>
        <div class="d-grid gap-2 col-6 mx-auto mt-3">
            <Link to={`checkout/${title}`}>
  <button class="btn btn-success" type="button">Get Premium Access Now!</button> </Link>
</div>
</div>
        </div>
    );
};

export default CourseDetails;