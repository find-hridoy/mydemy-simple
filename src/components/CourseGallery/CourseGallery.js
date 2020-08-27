import React from 'react';
import './CourseGallery.css'
import courseData from '../../fakeData/courseData';
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const CourseGallery = () => {
    const [courses, setCourses] = useState(courseData);
    const [cart, setCart] = useState([]);
    // Event Handler
    const addToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="course-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {
                                courses.map(course =>
                                    <div className="col-md-6 course-item">
                                        <div className="course-item">
                                            <Course course={course} addToCart={addToCart} key={course.id}></Course>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-area">
                            <Cart cart={cart}></Cart>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseGallery;