import React from 'react';

function Button({type, clickHandler, children, disabled}) {
    return (
        <button
            type={type}
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;