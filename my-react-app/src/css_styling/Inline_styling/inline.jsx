// Inline Styling
// To style an element with the inline style attribute, the value must be a JavaScript object:

// Example:
// Insert an object with the styling information:

/*
const Header = () => {
    return (
        <>
            <h1 style={{color: "red"}}>Hello Inline Style!</h1>
            <p>Add a little Style!</p>
        </>
    );
}
export default Header;
*/



/*

---------------------------------------------------------

Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

------------- camelCased Property Names --------------------

Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:

Example:
Use backgroundColor instead of background-color:

*/


// const Header = () => {
//     return (
//         <>
//             <h1 style={{backgroundColor: "yellow", color: "red"}} >Hello Inline Styling!</h1>
//             <p>Add a little Style!</p>
//         </>
//     );
// }
// export default Header;








/* 

-------------------------------------------------------

------------------ JavaScript Object ------------------------

You can also create an object with styling information, and refer to it in the style attribute:

Example:
Create a style object named myStyle:


*/

const Header = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgrBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    return (
        <>
            <h1 style={myStyle}>Hello Inline Styling!</h1>
            <p style={{color: "red"}}>Add a little Style!</p>
        </>
    );
}

export default Header;
