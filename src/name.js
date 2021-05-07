import React, {useState, useEffect} from 'react';

function Name(props) {

    console.log('THE PROPS ARE', props)
    return (
        <>

            <li style={{color: `${props.obj.color}`}} onClick={() => props.invokeAlert(props.obj)}>{props.obj.name}</li>


        </>
    );
}

export default Name;
