import React from 'react';
import './Tshirt.css';

const Tshirt = ({tShirt, handleAddToCart}) => {
    console.log(tShirt);
    const {_id, name, picture, price, index, gender} = tShirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;