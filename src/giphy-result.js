import React, {useState, useEffect} from 'react';

function GiphyResult(props) {
    console.log('the props to this component are', props)
    return (
        <>
            {/*<p>this is a giphy result</p>*/}
            <img src={props.url} alt="" className={'border-8 border-red-500'}/>
        </>
    );
}

export default GiphyResult;
