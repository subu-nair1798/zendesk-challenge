import React from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default () => {
    return(
        <Menu style={{ marginTop: "15px" }}>
            <Menu.Item>
                <Link to="/">Zendesk Ticket Viewer</Link>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}