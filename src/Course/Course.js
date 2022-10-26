import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({allCourses}) => {
//    const {id, title, img, details, duration, price} = allCourses;
    return (
        <div className='row row-cols-md-1 row-cols-sm-1 row-cols-lg-3 row-cols-1 g-4'>
        {
            allCourses.map(course =>
                     <div className=" col">
    <div className="card">
      <img className='card-img-top' src={course.img}></img>
      <div className="card-body">
        <h5 className="card-title"> {course.title}</h5>
        <p className="card-text">{course.details.slice(0,200)+'...'}<Link to={`${course.id}`}>Read More</Link></p>
        <div className='d-flex justify-content-between mx-3'>
            <div>
<span> Duration : {course.duration}</span>
            </div>
            <div>
<span>Price: €{course.price}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
               
                )
        }
        </div>
    );
};

export default Course;