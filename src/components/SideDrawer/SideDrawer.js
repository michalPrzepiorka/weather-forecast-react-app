import React from 'react';

import './SideDrawer.css';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/pogoda">Pogoda</Link></li>
                <li><Link to="/wykresy">Wykresy</Link></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;