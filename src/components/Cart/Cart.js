import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const subTotal = cart.reduce((total, course) => total + course.price, 0).toFixed(2);
    // Confirm Handler
    const confirmOrder = () => {
        alert("Thanks for Enroll Our Course");
    }
    return (
        <div className="cart">
            <h3>Checkout Summary</h3>
            <div className="price-summary">
                <div className="each-items d-flex justify-content-between align-items-center my-3">
                    <label>Items Orderd :</label>
                    <input type="text" value={cart.length} disabled />
                </div>
                <div className="each-items d-flex justify-content-between align-items-center my-3">
                    <label>Total :</label>
                    <input type="text" value={subTotal} disabled />
                </div>
            </div>
            <button className="btn btn-danger signIn-btn w-100" onClick={confirmOrder}>Confirm Order</button>
        </div>
    );
};

export default Cart;