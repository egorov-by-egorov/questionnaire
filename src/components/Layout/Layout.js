import React, {Component} from 'react';
import classes from './Layout.module.css'
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";
import Menu from "../Navigation/Menu/Menu";
import {connect} from "react-redux";

class Layout extends Component
{
    state = {
        menuIsOpen: false
    }
    onMenuToggleHandler = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        })
    }

    backdropCloseHandler = () => {
        this.setState({
            menuIsOpen: false
        })
    }

    render() {

        return (
            <div className={classes.Layout}>
                <Menu
                    isOpen={this.state.menuIsOpen}
                    backdropClose={this.backdropCloseHandler}
                    isAuthenticated={this.props.isAuthenticated}
                />

                <MenuToggle
                    onMenuToggleHandler={this.onMenuToggleHandler}
                    menuIsOpen={this.state.menuIsOpen}
                />

                <main className={classes.Layout__main}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)