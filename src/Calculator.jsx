import React, { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString()); // Note: Using eval can be dangerous in production code
        } catch (error) {
            setInput("Error");
        }
    };

    
    return (
        <div className="w-[540px]  mx-auto mt-16 p-10  border-2 border-gray-300 rounded-lg shadow-lg">
            <div className="px-10 py-3" >
                <input className="w-94 py-3 px-10 text-right border-[1px] border-gray rounded-[10px] text-xl" type="text" value={input} readOnly />
                <div className="flex gap-5 pt-5 ">
                    <button onClick={() => handleClick("1")}>1</button>
                    <button onClick={() => handleClick("2")}>2</button>
                    <button onClick={() => handleClick("3")}>3</button>
                    <button className="bg-[#ffd000]" onClick={() => handleClick("+")}>+</button>
                </div>
                <div className="flex gap-5 pt-5">
                    <button onClick={() => handleClick("4")}>4</button>
                    <button onClick={() => handleClick("5")}>5</button>
                    <button onClick={() => handleClick("6")}>6</button>
                    <button className="bg-[#ffd000]" onClick={() => handleClick("-")}>-</button>
                </div>
                <div className="flex gap-5 pt-5">
                    <button onClick={() => handleClick("7")}>7</button>
                    <button onClick={() => handleClick("8")}>8</button>
                    <button onClick={() => handleClick("9")}>9</button>
                    <button className="bg-[#ffd000]" onClick={() => handleClick("*")}>×</button>
                </div>
                <div className="flex gap-5 pt-5">
                    <button onClick={handleClear}>C</button>
                    <button onClick={() => handleClick("0")}>0</button>
                    <button onClick={handleCalculate}>=</button>
                    <button className="bg-[#ffd000]" onClick={() => handleClick("/")}>÷</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
