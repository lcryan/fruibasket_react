import React from 'react';
import Button from "./Button";


function Counter({fruit, setFruit}) {
    return (
        <>
            <Button
                type='button'
                disabled={fruit === 0}
                clickHandler={() => setFruit(fruit - 1)}
            >
                -
            </Button>

            <p>{fruit}</p>
            <Button
                type="button"

                clickHandler={() => setFruit(fruit + 1)}
            >
                +
            </Button>

        </>
    );
}

export default Counter;