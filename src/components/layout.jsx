import React from 'react'
import NavBar from './navBar'

const Layout = (props) => {
    return(
        <React.Fragment>
            <div className="bg-gray-800 h-screen w-screen">
                <NavBar/>
                {props.children}
            </div>
        </React.Fragment>
    )
} 

export default Layout