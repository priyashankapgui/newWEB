import React from 'react';

function Navbar(props) {
    return (
        <div>
            <div>
                <div className={NavlogoImageDev}>
                    <img src={} className={NavlogoImag}/>
                </div>
            </div>
            <ul>
                <li>
                   <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/home">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;