import React from "react";
import ModeToggler from "./ModeToggler";
import '../Sidebar.css';

function Sidebar({ isDarkMode, isOpen, toggleDrawer, toggleDarkMode}) {
    const asideStyle =  {
        background: isDarkMode ? "#121212" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
        marginTop: "100px",
    }
    return (
        <div>
            <button className="hamburger-menu" onClick={toggleDrawer}>
                &#9776;
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <button className="close-btn" onClick={toggleDrawer}>
                    &times;
                </button>
                <aside style={asideStyle} className="sidebar-component">
                    <h2>Elsewhere</h2>
                    <p>Github</p>
                    <p>Twitter</p>
                    <p>Medium</p>
                    <p>Youtube</p>
                    <ModeToggler toggleDarkMode={toggleDarkMode} />
                </aside>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Sidebar;