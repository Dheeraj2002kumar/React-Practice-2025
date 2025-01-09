/*

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

Although Hooks generally replace class components, there are no plans to remove classes from React.

What is a Hook?
Hooks allow us to "hook" into React features such as state and lifecycle methods.

*/

import React, { useState } from 'react';
import ReactDOM from "react-dom";

function FavoriteColor(){
    const [color, setColor] = useState("red");

    return (
        <>
        <h1>My favorite color is {color}!</h1>
        <button type='button' onClick={() => setColor("blue")}>Blue</button>
        <button type='button' onClick={() => setColor("red")}>Red</button>
        <button type='button' onClick={() => setColor("pink")}>Pink</button>
        <button type='button' onClick={() => setColor("green")}>Green</button>
        </>
    );
}

export default FavoriteColor;
