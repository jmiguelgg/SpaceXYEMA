import React from 'react'
import NavBar from './navBar'

const Layout = (props) => {
    return(
        <React.Fragment>
            <NavBar/>
            {props.children}
        </React.Fragment>
    )
} 

export default Layout