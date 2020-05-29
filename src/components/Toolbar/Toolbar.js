import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import CurrentDate from '../../CurrentDate';

const toolbar = props => (  
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">Pogoda</a></div>
            <Divider orientation='vertical'/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/pogoda">Pogoda</Link></li>
                    <li><Link to="/wykresy">Wykresy</Link></li>
                </ul>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigatin-weather-update">
                <ul>
                    <li className="update">
                        Ostatnia aktualizacja:
                        <div style={{padding: '3px'}}>
                        </div> <CurrentDate />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;