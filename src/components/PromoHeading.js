// v1 
// function PromoHeading() {
//     return (
//         <h4> 80% off sale!</h4>
//     )
// }

function PromoHeading(props) {
    return (
        <div>
            <h4> {props.heading} </h4>
            <h4> {props.cta} </h4>
        </div>  
    );
}

export default PromoHeading;