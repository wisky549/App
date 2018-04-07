import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <li className="treeview menu-open">
                            <Link to='/order'>
                                <span>Orders</span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to='/order'>Order list</Link></li>
                                <li><Link to='/order/create'>Create order</Link></li>
                            </ul>
                        </li>
                        <li className="treeview menu-open">
                            <Link to='/order'>
                                <span>Products</span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to='/order/create'>Create product</Link></li>
                                <li><Link to='/order'>Product list</Link></li>
                                <li><Link to='/order'>Product categories</Link></li>
                            </ul>
                        </li>
                        <li className="treeview menu-open">
                            <Link to='/'>
                                <span>Suppliers</span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to='/order/create'>Create supplier</Link></li>
                                <li><Link to='/order'>Supplier list</Link></li>
                            </ul>
                        </li>
                        <li className="treeview menu-open">
                            <Link to='/'>
                                <span>Services</span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to='/order'>Service list</Link></li>
                            </ul>
                        </li>
                        <li className="treeview menu-open">
                            <Link to='/order'>
                                <span>Users</span>
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to='/order'>Users list</Link></li>
                                <li><Link to='/order/create'>Create user</Link></li>
                            </ul>
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