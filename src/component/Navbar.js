import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";


function Navbar(){
    return(
        <div>
            <nav>
                <ul className="left">
                    <li className ='li'>
                        <Link className="title" to="/home">My News</Link>
                    </li>
                    <li className ='l'>
                        <Link className='a' to="/home">Home</Link>
                    </li>
                    <li className ='l'>
                        <Link className='a' to="/home">News</Link>
                    </li>
                    <li className ='l'>
                        <Link className='a' to="/home">Entertaiment</Link>
                    </li>
                    <li className ='l'>
                        <Link className='a' to="/home">Sport</Link>
                    </li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar;