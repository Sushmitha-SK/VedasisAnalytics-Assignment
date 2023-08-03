import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import axios from 'axios';
import FilterListIcon from '@mui/icons-material/FilterList';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsDownload } from "react-icons/bs";
import '../styles/main.css';

const Dashboard = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const [userdetails, setUserDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(apiURL);
            setUserDetails(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };



    const filteredUserDetails = userdetails.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div>
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <main>
                        <div className="page-header">
                            &nbsp;
                        </div>
                        <div className="page-content">
                            <div className="records table-responsive">
                                <div className="record-header">
                                    <div className="record-section">
                                        <div className='userTabSection'>
                                            <ul className="tabList">
                                                <li className="tabHighlight tabListItem">Users</li>
                                                <li className='tabListItem'>Campaign</li>
                                                <li className='tabListItem'>Tables</li>
                                                <li className='tabListItem'>List</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <FiRefreshCcw style={{
                                                fontSize: '30px',
                                                margin: 20,
                                                width: '18px',
                                                color: '#4e4f4f',
                                                cursor: 'pointer'
                                            }} />
                                        </div>
                                        <button className='downloadButton' style={{
                                            background: '#fff',
                                            cursor: 'pointer',
                                            color: '#8e99af', padding: '10px',
                                            width: '170px',
                                            height: '50px',
                                            borderRadius: '50px',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
                                            fontSize: '16px',
                                            fontWeight: 500
                                        }}>
                                            <BsDownload style={{ marginRight: '5px', width: '30px', height: '18px', color: '#afb7c4' }} />  Download</button>

                                    </div>

                                    <div className="search-section" style={{ marginRight: '250px' }}>
                                        <div className="searchInput">
                                            <input
                                                type="text"
                                                placeholder="Search for influencer"
                                                value={searchQuery}
                                                onChange={handleSearchChange}
                                                style={{
                                                    width: '250px',
                                                    height: '50px',
                                                    paddingLeft: '35px',
                                                }}
                                            />

                                            <button className='searchButton' style={{ height: '50px' }} >Search</button>
                                            <FilterListIcon style={{ color: '#444444', marginTop: '20px', marginLeft: '10px', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '1rem' }}>

                                    <div className="table-container">

                                        <table width="100%" style={{ borderRadius: '25px' }}>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Website</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredUserDetails.length === 0 ? (
                                                    <tr>
                                                        <td colSpan="4" style={{ textAlign: 'center' }}>No records found</td>
                                                    </tr>
                                                ) : (
                                                    filteredUserDetails.map((user) => (
                                                        <tr key={user.id}>
                                                            <td>
                                                                <div>
                                                                    <div>{user.name}</div>
                                                                </div>
                                                            </td>
                                                            <td>{user.username}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.website}</td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </main>
                </div >
            </div >
        </>
    );
};

export default Dashboard;