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


            <div className="container-strawberries">
                <h3 className="strawberry-name"> 🍓 Aardbeien </h3>
                <button className="control-button" onClick={decrease}>-</button>
                <div className="counter"> {counter} </div>
                <button className="control-button" onClick={increase}>+</button>

            </div>

            <div className="container-bananas">
                <h3 className="banana-name"> 🍌 Bananen </h3>
                <button className="control-button" onClick={decrease}>-</button>
                <div className="counter"> {counter} </div>
                <button className="control-button" onClick={increase}>+</button>

            </div>

            <div className="container-apples">
                <h3 className="apples-name"> 🍏 Appels </h3>
                <button className="control-button" onClick={decrease}>-</button>
                <div className="counter"> {counter} </div>
                <button className="control-button" onClick={increase}>+</button>

            </div>

            <div className="container-kiwis">
                <h3 className="kiwi-name"> 🥝 Kiwi's </h3>
                <button className="control-button" onClick={decrease}>-</button>
                <div className="counter"> {counter} </div>
                <button className="control-button" onClick={increase}>+</button>
            </div>
                <div className="reset-button">
                <button className="reset" onClick={reset}>reset</button>
            </div>
        </>
    );
}

export default App;






