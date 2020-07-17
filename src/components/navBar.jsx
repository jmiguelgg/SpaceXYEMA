import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">
                        <a href="/">Home</a>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <a href="/">About</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar