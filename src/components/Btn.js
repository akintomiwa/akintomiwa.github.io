function Btn () {
    const clickHandler = 
        () => console.log('clicked')
    return (
        <button onClick={clickHandler}> 
            Sign Up
        </button>
    )
}

export default Btn;

// function Btn () {
//     const clickHandler = 
//         () => console.log('mouse over')
//     return (
//         <button id = "js-signup" 
//             onMouseOver={clickHandler}> 
//             Sign up
//         </button>
//     )
// }

// export default Btn;