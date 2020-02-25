import React from "react";
import {slide as Menu } from 'react-burger-menu'

const Sidebar= props => {
    return (
        <Menu>
        <a className = "menu-item" href="/">
            Home
        </a>
        <a className = "menu-item" href="/animals">
            Animals
        </a>
        <a className = "menu-item" href="/locations">
            Locations
        </a>
        <a className = "menu-item" href="/owners">
            Owners
        </a>
        <a className = "menu-item" href="/employees">
            Employees
        </a>

        </Menu>
    )
}
export default Sidebar;