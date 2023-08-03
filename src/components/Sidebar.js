import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TagIcon from '@mui/icons-material/Tag';
import { FiSettings } from 'react-icons/fi';
import '../styles/main.css'

const Sidebar = () => {
    return (
        <>
            <input type="checkbox" id="menu-toggle" defaultChecked />
            <div className="sidebar sidebarContent" style={{ background: '#fff' }}>
                <div className="side-header" style={{ textAlign: 'center' }}>
                    <img src={logo} alt="" style={{ width: '30px', height: '30px' }} />
                </div>
                <div className="side-content">
                    <div className="side-menu">
                        <ul>
                            <li style={{ marginTop: '20px' }}>
                                <Link to="">
                                    <div style={{
                                        background: '#0593ee',
                                        margin: '5px 10px',
                                        borderRadius: '5px',
                                        height: '55px'
                                    }}>
                                        <a>
                                            <AdminPanelSettingsIcon style={{ color: '#fff' }} />
                                        </a>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <a>
                                        <TagIcon style={{
                                            fontWeight: 800,
                                            color: '#737c8f'
                                        }} />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <a>
                                        <FiSettings style={{
                                            fontWeight: 800,
                                            color: '#737c8f', fontSize: '20px'
                                        }} />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar