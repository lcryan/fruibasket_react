import React from 'react';
import './App.css';
import {useState} from "react";
import FruitLogo from "./assets/screenshot-logo.png"

function App() {


    const [strawberries, setStrawberries] = useState(0)
    const [bananas, setBananas] = useState(0)
    const [apples, setApples] = useState(0)
    const [kiwis, setKiwis] = useState(0)


    const [nameValue, setNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = useState('')
    const [ageValue, setAgeValue] = React.useState('');
    const [postCodeValue, setPostCodeValue] = useState('');
    const [selectBoxValue, setSelectBoxValue] = useState('')
    const [messageValue, setMessageValue] = React.useState('');
    const [checkBoxValue, setCheckBoxValue] = React.useState(false);

    function handleChange(e) {
        setSelectBoxValue(e.target.value)
    }

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


    function handleSubmit(e) {
        e.preventDefault()
        console.log(nameValue, ageValue, messageValue, lastNameValue, checkBoxValue, selectBoxValue)
    }


    return (

        <>
            <div className="fruit-logo-container">
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


            <div className="from-document">

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        Voornaam:
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </label>

                    <label htmlFor="last-name">
                        Achternaam:
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            value={lastNameValue}
                            onChange={(e) => setLastNameValue(e.target.value)}
                        />
                    </label>

                    <label htmlFor="age">
                        Age:
                        <input
                            type="number"
                            id="user-age"
                            name="user-age"
                            min="18"
                            max="100"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </label>

                    <label htmlFor="postcode">
                        Postcode:
                        <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={postCodeValue}
                            onChange={(e) => setPostCodeValue(e.target.value)}
                        />
                    </label>

                    <label htmlFor="select-box">
                        Bezorgopties:
                        <select value={selectBoxValue} onChange={handleChange}>
                            <option value="iedere week">iedere week</option>
                            <option value="om de week">om de week</option>
                            <option value="om de maand">om de maand</option>
                        </select>
                    </label>


                    <label htmlFor="message">
                        Opmerking:
                        <input
                            type="textarea"
                            id="user message"
                            name="user message"
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                    </label>


                    <label htmlFor="subscribe">
                        Ik ga akkoord met de voorwaarden.
                        <input type="checkbox"
                               id="subscribe box"
                               name="subscribe box"
                               checked={checkBoxValue}
                               onChange={(event) => setCheckBoxValue(!checkBoxValue)}
                        />
                    </label>
                    <button type="submit">submit</button>
                </form>

            </div>


        </>
    );
}

export default App








