import React from 'react'
import '../styles/main.css'
import avatarImage from '../assets/userImage.png'
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
    return (
        <>
            <header>
                <div className="header-content">
                    <label htmlFor="menu-toggle">
                        &nbsp;
                    </label>
                    <div className="header-menu">

                        <div className='user-profile'>
                            <div className="user-info">
                                <img
                                    className="user-photo"
                                    src={avatarImage}
                                    alt="User"
                                />
                                <div>
                                    <p style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Poppins' }}>ChethanB</p>
                                    <p style={{ color: 'grey', margin: 0, fontSize: '11px' }}>Brand</p>
                                </div>
                                <FiChevronDown style={{ width: '25px', height: '25px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header