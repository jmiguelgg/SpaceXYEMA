import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar