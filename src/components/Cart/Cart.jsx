import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0) {
        message = <p>Please add some products...</p>
    }
    else {
        message =         <div>
        <p>Thanks for added cart</p>
    </div>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? "blue" : "red"}>Order Summary :{cart.length}</h3>
            <p className={`bold ${cart.length ===3 ? 'yellow' : 'purple'}`}>Something</p>
            {
            cart.length > 2 ? 
            <span className='purple'>Aro kino</span> : 
            <span>Proverty</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}<button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>Aro kinte hobe</p>
            }
            {
                cart.length === 2 || <p>Icca hole kinte paro na hole nai</p>
            }
        </div>
    );
};

export default Cart;

/*
 * 1. use if else to set a variable that will contain an element, components.
* 2. ternary operator: condition ? 'for true' : 'false'
* 3. logical &&: (if the condition is true than the next thing will be displayed)
* 4. Logical ||: (if the condition one side only true than the condition will be displayed)
 */

/**
 * 1. Condiotional CSS class
 */