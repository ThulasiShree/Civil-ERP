import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assert/DashBoard_Assert/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';

// Navigation items
import 'bootstrap-icons/font/bootstrap-icons.css';

const navItems = [
    { icon: 'bi-columns-gap', label: 'DashBoard' },
    { icon: 'bi-card-text', label: 'Project' },
    { icon: 'bi-window-stack', label: 'Expense' },
    { icon: 'bi-card-text', label: 'Contractor' },
    { icon: 'bi-truck', label: 'Vechile' },
    { icon: 'bi-box-seam', label: 'Inventory' },
    { icon: 'bi-person-vcard', label: 'Clients' },
    { icon: 'bi-clipboard2-pulse', label: 'Quatation' },
    { icon: 'bi-card-list', label: 'Statement' },
    { icon: 'bi-person-workspace', label: 'Labour' },
    { icon: 'bi-building-fill', label: 'Stock' },
    { icon: 'bi-box-arrow-right', label: 'Logout' },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <section className="page">
            <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
                <header>
                    <button
                        type="button"
                        className="sidebar-burger"
                        onClick={handleToggle}
                    >
                        <img src={Logo} alt="Logo" className="logo-icon" />
                    </button>
                </header>
                <nav>
                    {navItems.map((item) => (
                        <NavLink className={({isActive}) => isActive ? 'text-decoration-none text-secondary activeLink' : 'text-decoration-none text-secondary'} key={item.label} to={`/${item.label.toLowerCase()}`}>
                            <button type="button">
                                <i className={`bi ${item.icon}`} style={{ fontSize: '18px', margin: '0 10px' }}></i>
                                {isOpen && <p className='text-decoration-none'>{item.label}</p>} {/* Show labels only when open */}
                            </button>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </section>
    );
};

export default Sidebar;
