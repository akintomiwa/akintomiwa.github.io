// import Promo from "./Promo";
import React from "react";

function Footer({ isDarkMode }) {
    const asideStyle =  {
        background: isDarkMode ? "#121212" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
        // width: "calc(30% - 10px)",
        marginLeft: "10px",
    }
    return (
        <div>
            <aside 
                style={asideStyle} 
                className="footer-component">
                <h6>(c) Isaac Akin-Onigbinde, 2024 </h6>
                {/* <h2>Footer content</h2> */}
                {/* <Promo /> */}
            </aside>
        </div>
    )
}

export default Footer;