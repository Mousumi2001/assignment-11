import React from 'react';

const Details = ({ detail }) => {
    const { name, price, img } = detail
    return (
        <div>
            {img}
        </div>
    );
};

export default Details;