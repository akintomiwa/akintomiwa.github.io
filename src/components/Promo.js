import PromoHeading from "./PromoHeading";

// // V1 
// function Promo () {
//     return (
//         <div>
//             <PromoHeading />
//         </div>
//     )
// }


const data = {
    heading: "99% off all items!",
    cta: "Everything must go!" 
}

// V2 
function Promo () {
    return (
        <div>
            <PromoHeading 
            heading = {data.heading}
            cta = {data.cta}
            />
        </div>
    )
}


export default Promo;