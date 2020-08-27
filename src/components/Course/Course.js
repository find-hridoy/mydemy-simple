import React from 'react';
import './Course.css'
import { faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Course = (props) => {
    // console.log(props);
    const { title, name, price, oldPrice, img, stockTime } = props.course;
    return (
        <div>
            <div className="card-group">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title">{title}</p>
                        <p className="card-text">{name}</p>
                        <p className="price">$ {price} <span className="oldPrice">${oldPrice}</span></p>
                        <p className="stock"><FontAwesomeIcon icon={faClock} /> {stockTime} days<small> left at this price!</small></p>
                        <button className="btn btn-outline-dark signIn-btn" onClick={() => props.addToCart(props.course)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;