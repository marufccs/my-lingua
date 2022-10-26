import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className='row'>
             <div className="col-lg-2 col-md-12">
                <ul>
                    {
                        allCourses.map(course => 
                        <Link className='d-block text-decoration-none text-success mt-3 fs-5'>{course.title}</Link>)
                    }
                </ul>
             </div>
    <div className="col-lg-9 col-md-12 ">
        <div>
        <Course  key={allCourses.id} allCourses= {allCourses}></Course>
        </div>
    </div>
        </div>
    );
};

export default Courses;