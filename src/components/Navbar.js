// import {Routes, Route, Link} from 'react-router-dom';
// import AboutMe from './AboutMe';
// import SoftwareProjects from './SoftwareProjects';


// function NavBar(props) {
//     return (
//         <div>
//             <nav className='main-nav'>
//                 <ul>
//                     <Link to="/" className='nav-item'> Home </Link>
//                     <Link to="/aboutme" className='nav-item'> About Me </Link>
//                     <Link to="/softwareprojects" className='nav-item'> Software Projects </Link>
//                     <Link to="/visualprojects" className='nav-item'> Visual Projects </Link>
//                 </ul>
//             </nav>
//             <Routes>
//                 {/* <Route path="/" element={<Home />}/> */}
//                 <Route path="/aboutme" element={<AboutMe />}/>
//                 {/* <Route path="/visualprojects" element={<VisualProjects />}/> */}
//                 <Route path="/softwareprojects" element={<SoftwareProjects />}/>
//             </Routes>
//         </div>
//     );
// }

import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ items }) {
    return (
      <nav className='main-nav'>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, '-')}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }


export default NavBar;

// function NavBar(props) {
//     return (
//         <nav className="main-nav">
//             <ul>
//                 <li>{props.first}</li>
//                 <li>{props.second}</li>
//                 <li>{props.third}</li>
//                 <li>{props.fourth}</li>
//             </ul>
//         </nav>
//     );
// }

{/* <nav className="main-nav">
    <ul>
        {props.items.map((item, index) => (
            <li key={index}>

                <Link to={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className='nav-item'>{item}</Link>
            </li>
        ))}
    </ul>
</nav> */}

{/* <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
    {item}
</a> */}