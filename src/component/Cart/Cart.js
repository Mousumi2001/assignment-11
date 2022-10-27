

import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ course }) => {
    const { id, name, img, Details } = course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {/* <p>{Details}</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to="/cartDetails">Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;