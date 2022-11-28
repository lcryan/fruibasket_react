import React from 'react';


const Button =
({type, className, clickHandler, name}) => {
    return (
        <button
            name={name}
            type={type}
            className={className}
            onClick={clickHandler}
        >
        </button>
    );
}

export default Button;