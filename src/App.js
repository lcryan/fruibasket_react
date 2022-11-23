import React from 'react';
import './App.css';
import {useState} from "react";
import FruitLogo from "./assets/screenshot-logo.png"
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

    function bananasAdd() {
        setBananas(bananas + 1)
    }

    function bananasMin() {
        if (bananas === 0) {
            alert("You cannot go below zero")

        } else {
            setBananas(strawberries - 1)
        }
    }


    function applesAdd() {
        setApples(apples + 1)
    }

    function applesMin() {
        if (apples === 0) {
            alert("You cannot go below zero")

        } else {
            setApples(apples - 1)
        }
    }


    function kiwisAdd() {
        setKiwis(kiwis + 1)
    }

    function kiwisMin() {
        if (kiwis === 0) {
            alert("You cannot go below zero")

        } else {
            setKiwis(kiwis - 1)
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
            <div className="fruit-logo-container" >
<img src={FruitLogo} alt="fruit-logo" className="fruit-logo"/>
            </div>

            <h1>Snoep gezond, eet lekker fruit! Bestel daarom hier bij ons!</h1>


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
                <button className="control-button" onClick={applesMin}>-</button>
                <div className="counter"> {apples} </div>
                <button className="control-button" onClick={applesAdd}>+</button>

            </div>

            <div className="container-kiwis">
                <h3 className="kiwi-name"> 🥝 Kiwi's </h3>
                <button className="control-button" onClick={kiwisMin}>-</button>
                <div className="counter"> {kiwis} </div>
                <button className="control-button" onClick={kiwisAdd}>+</button>
            </div>
            <div className="reset-button">
                <button className="reset" onClick={resetFruitsToZero}>reset</button>
            </div>
        </>
    );
}

export default App;






