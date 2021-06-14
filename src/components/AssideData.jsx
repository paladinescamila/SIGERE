import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Mis Proyectos',
        path: '/projects',
        icon: <FaIcons.FaProjectDiagram/>,
        cName: 'nav-text'
    },
    {
        title:'Compartidos Conmigo',
        path: '/shared',
        icon: <RiIcons.RiUserShared2Fill/>,
        cName: 'nav-text'
    },
    {
        title:'Calendario',
        path: '/calendar',
        icon: <AiIcons.AiOutlineCalendar/>,
        cName: 'nav-text'
    },
    {
        title:'Configuración',
        path: '/settings',
        icon: <FiIcons.FiSettings/>,
        cName: 'nav-text'
    }
]