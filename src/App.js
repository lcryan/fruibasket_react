import React from 'react';
import './App.css';

function App() {

    const [counter, setCounter] = React.useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        if (counter === 0) {
            alert("You cannot go below zero");
            return;
        }
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return (

        <>

            <h1>Fruitmand bezorgservice</h1>

            <span className="counter-output"/>
<span className="bananas">
            <h3> 🍌 Bananen </h3>
            <button className="control-button" onClick={decrease}>-</button>
            <div> {counter} </div>
            <button className="control-button" onClick={increase}>+</button>
            <button className="reset-button" onClick={reset}>reset</button>
        </span>
        </>
    );
}

export default App;
