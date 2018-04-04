import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="treeview">
                            <Link to='/'>
                                <span>Report</span>
                            </Link>
                        </li>
                        <li className="treeview">
                            <Link to='/order'>
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <span>Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Purchase</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default NavBar;