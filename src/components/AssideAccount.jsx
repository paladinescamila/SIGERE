import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import "../css/AssideAccount.css";
import {SidebarDataAccount} from './AssideAccountData';
import Header from './Header';

function AssideAccount() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className={sidebar ? 'header-n moved' : 'header-n'}>
                <Header/>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle"  onClick={showSidebar}>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineCloseCircle />
                        </Link>
                    </li>
                    {SidebarDataAccount.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li className="navbar-toggle navbar-close">
                        <input type="submit" value="Cerrar Sesión" class="solid-button" />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AssideAccount
