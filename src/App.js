import React from 'react';
import './App.css';
import {useState} from "react";

function App() {


    const [strawberries, setStrawberries] = useState(0)
    const [bananas, setBananas] = useState(0)
    const [apples, setApples] = useState(0)
    const [kiwis, setKiwis] = useState(0)

    function strawberryAdd() {
        setStrawberries(strawberries + 1)
    }

    function strawberryMin() {
        if (strawberries === 0) {
            alert("You cannot go below zero")

        } else {
            setStrawberries(strawberries - 1)
        }
    }

function bananasAdd(){
        setBananas(bananas+1)
}
    function bananasMin() {
        if (bananas === 0) {
            alert("You cannot go below zero")

        } else {
            setBananas(strawberries - 1)
        }
    }



    function resetFruitsToZero() {
        setBananas(0)
        setApples(0)
        setStrawberries(0)
        setKiwis(0)
    }

    return (

        <>

            <h1>Fruitmand bezorgservice</h1>


            <div className="container-strawberries">
                <h3 className="strawberry-name"> 🍓 Aardbeien </h3>
                <button className="control-button" onClick={strawberryMin}>-</button>
                <div className="counter"> {strawberries} </div>
                <button className="control-button" onClick={strawberryAdd}>+</button>

            </div>

            <div className="container-bananas">
                <h3 className="banana-name"> 🍌 Bananen </h3>
                <button className="control-button" onClick={bananasMin}>-</button>
                <div className="counter"> {bananas} </div>
                <button className="control-button" onClick={bananasAdd}>+</button>

            </div>

            <div className="container-apples">
                <h3 className="apples-name"> 🍏 Appels </h3>
                <button className="control-button" onClick={() => setApples(apples - 1)}>-</button>
                <div className="counter"> {apples} </div>
                <button className="control-button" onClick={() => setApples(apples + 1)}>+</button>

            </div>

            <div className="container-kiwis">
                <h3 className="kiwi-name"> 🥝 Kiwi's </h3>
                <button className="control-button" onClick={() => setKiwis(kiwis - 1)}>-</button>
                <div className="counter"> {kiwis} </div>
                <button className="control-button" onClick={() => setKiwis(kiwis + 1)}>+</button>
            </div>
            <div className="reset-button">
                <button className="reset" onClick={resetFruitsToZero}>reset</button>
            </div>
        </>
    );
}

export default App;






