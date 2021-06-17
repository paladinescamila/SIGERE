// import '../css/Header.css';
import '../css/Header.css';
import notificationsLogo from '../img/notifications.svg';
import messagesLogo from '../img/messages.svg';
import calendarLogo from '../img/calendar.svg';
import profilePhoto from '../img/profile.jpg';
import searchButton from '../img/search.svg';
import React from 'react'

export function Header() {

    return (
        <header>
            <div className="header-menu">
                <img src={notificationsLogo} alt="Notificaciones"></img>
                <img src={messagesLogo} alt="Mensajes"></img>
                <img src={calendarLogo} alt="Calendario"></img>
            </div>
            <div className="header-search-profile">
                <div className="header-search">
                    <input className="search input" type="text" placeholder="Buscar..."></input>
                    <img src={searchButton} alt="Seach"></img>
                </div>
                <img src={profilePhoto} alt="Profile" className="header-profile"></img>
            </div>
        </header>
    )
}
