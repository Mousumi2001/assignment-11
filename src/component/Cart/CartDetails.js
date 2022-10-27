import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CartDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            {/* {
                details.map(detail => <details key={detail.id} detail={detail}></details>)
            } */}
        </div>
    );
};

export default CartDetails;