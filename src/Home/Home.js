import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { BiRightArrow } from "react-icons/bi";

const Home = () => {
    return (
        <div>
           <div className='the-whole-page'>
            <img className='img-fluid main-image' src="https://thumbs.dreamstime.com/b/education-concept-happy-student-girl-books-laptop-yellow-background-celebrating-success-147950997.jpg" alt="" />
            <h1 className='first-h1'>Learn New Languages and Make new experiences</h1>
            <p className='first-p'>
                The world is moving fast. You can't have only one language to communicate with the whole world. Learn a new language and get access to a whole different country!
                <Link className='text-decoration-none' to ='/courses'>
                <button type="button" class="btn btn-info d-block start-button mt-2 ">Get Started <BiRightArrow></BiRightArrow> </button></Link>
            </p>
            
           </div>
        </div>
    );
};

export default Home;