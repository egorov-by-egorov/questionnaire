import React, {Component} from 'react';
import classes from './Layout.module.css'
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";
import Menu from "../Navigation/Menu/Menu";

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
                <MenuToggle
                    onMenuToggleHandler={this.onMenuToggleHandler}
                    menuIsOpen={this.state.menuIsOpen}
                />
                <Menu
                    isOpen={this.state.menuIsOpen}
                    backdropClose={this.backdropCloseHandler}
                />
                <main className={classes.Layout__main}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout