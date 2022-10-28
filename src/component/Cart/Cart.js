

import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ course }) => {
    const { id, name, img, details, price } = course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img className='' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Course-Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to="/cartDetails">Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;