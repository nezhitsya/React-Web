import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {
    SmileTwoTone,
  } from '@ant-design/icons';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Trip',
        path: '/trip'
    },
    {
        title: 'Activity',
        path: '/activity'
    },
    {
        title: 'Food',
        path: '/food'
    },
    {
        title: 'Login',
        path: '/login'
    },
    {
        title: 'ETC',
        path: '/etc'
    }
]

export default function Navigation() {
    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className="site-navigation" role="navigation">
        <span className="menu-title">React Blog</span>
        <div className={ `menu-content-container ${menuActive && 'active'}` }>
            <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                    ))
                }
            </ul>
            <span className="menu-avatar-container">
                <SmileTwoTone size={38} twoToneColor='#00999b' />
                {/* <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span> */}
                <span className="menu-avatar-name">Dayeong Lee</span>
            </span>
        </div>
        <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
    </nav>)
}