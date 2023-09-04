import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Spacial = ({ring}) => {
    const angti = useContext(RingContext);
    return (
        <div>
            <h2>Spacial</h2>
            <p><smal>{angti}</smal></p>
        </div>
    );
};

export default Spacial;