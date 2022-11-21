import React from 'react';
import './App.css';

function App() {

    const [fruitCounter, setFruitCounter] = React.useState(0)

    const increase = () => {
        setFruitCounter( fruitCounter + 1)
    }

    const decrease = () => {
        setFruitCounter( fruitCounter - 1)
    }

    const reset = () => {
        setFruitCounter(0)
    }

    return (

        <>
            <div className="fruit-counter">
                <h1>Fruitmand bezorgservice</h1>
                <span className="counter-output"/>
                <div className="button-container">
                    <button className="control-button" onClick={increase}>+</button>
                    <button className="control-button" onClick={decrease}>-</button>
<button className="reset-button" onClick={reset}>reset</button>
                </div>
            </div>
        </>
    );
}

export default App;
