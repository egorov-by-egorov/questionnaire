import React, {Component} from 'react';
import classes from './Layout.module.css'
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";

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
    render() {
        return (
            <div className={classes.Layout}>
                <MenuToggle
                    onMenuToggleHandler={this.onMenuToggleHandler}
                    menuIsOpen={this.state.menuIsOpen}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout