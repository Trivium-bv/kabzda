import {useState} from "react";

export const Button2 = () => {
    let [a, setA] = useState(1)
    const oClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const oClickHandler2 = () => {
        setA(0)
        console.log(a)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={oClickHandler}>number</button>
            <button onClick={oClickHandler2}>0</button>
        </div>
    )
}