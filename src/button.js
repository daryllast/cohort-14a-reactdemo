import React, {useState, useEffect} from 'react';

function Button(props) {

    console.log('the props received are', props)

    const getClasses = () => {
        let classString = 'rounded pl-3 pr-3 pt-4 pb-4';
        if(props.color){
            classString = classString + ` ${props.color}`;
        } else {
            classString = classString + ` text-blue-500`;
        }

        if(props.textColor){
            classString = classString + ` ${props.textColor}`;
        } else {
            classString = classString + ` text-white`;
        }

        console.log(classString);
        return classString;

        // return props.color ? `${props.color} text-white rounded pl-3 pr-3 pt-4 pb-4` : 'bg-blue-500 text-white rounded pl-3 pr-3 pt-4 pb-4'
    };

    return (
        <>
            {JSON.stringify(props)}
            <button className={getClasses()}>{props.buttonText || 'Submit'}</button>
        </>
    );
}

export default Button;
