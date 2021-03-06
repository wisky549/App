import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import {BaseLayout} from './BaseLayout';

export class PageLayout extends Component {
    constructor() {
        super();
        document
            .getElementById('body')
            .className = 'hold-transition skin-blue-light sidebar-mini';
    }
    render() {
        return <BaseLayout title={this.props.title}>
            <div className="wrapper">
                <header className="main-header">
                    <Link to="/" className="logo"></Link>
                    <nav className="navbar navbar-static-top">
                        <h1>{this.props.title}</h1>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="dropdown user user-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <span className="hidden-xs">Phong Hoang</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <NavBar/>

                <div className="content-wrapper">
                    <section className="content">
                        {this.props.children}
                    </section>
                </div>
                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b>
                        2.4.0
                    </div>
                    <strong>Copyright &copy; 2014-2016
                        <a href="https://adminlte.io">Almsaeed Studio</a>.</strong>
                    All rights reserved.
                </footer>
            </div>
        </BaseLayout>;
    }
}

PageLayout.propTypes = {
    title: PropTypes.string
}

export default PageLayout;