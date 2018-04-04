import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import { BaseLayout } from './BaseLayout';

export class PageLayout extends Component {
    constructor() {
        super();
        document
            .getElementById('body')
            .className = 'hold-transition skin-blue sidebar-mini';
    }
    render() {
        return <BaseLayout title={this.props.title}>
            <div className="wrapper">
                <header className="main-header">
                    <a href="../../index2.html" className="logo">
                        <span>Web app</span>
                    </a>
                    <nav className="navbar navbar-static-top">
                        <h1>{this.props.title}</h1>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="dropdown user user-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <span className="hidden-xs">Phong Hoang</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-toggle="control-sidebar">
                                        <i className="fa fa-gears"></i>
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