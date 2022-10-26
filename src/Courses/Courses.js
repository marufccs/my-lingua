import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className='row'>
             <div className="col-2">
                <ul>
                    {
                        allCourses.map(course => 
                        <Link className='d-block text-decoration-none text-success mt-3 fs-5'>{course.title}</Link>)
                    }
                </ul>
             </div>
    <div className="col-10 bg-secondary">
        
    </div>
        </div>
    );
};

export default Courses;