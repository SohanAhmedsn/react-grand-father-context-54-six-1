import React from 'react';
import Father from '../Father/Father';
import Aunty from '../Uncle/Aunty/Aunty';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {house} = props;
    return (
        <div>
            <h1>GrandFather</h1>
            <h5>house: {house}</h5>
            <div style={{display:'flex',}}>
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;