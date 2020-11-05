import React, { Component } from 'react'
import classes from './Menu.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    1,2,3
]

class Menu extends Component
{
    renderLinks () {
       return links.map((link,index) => {
            return (
                <li
                    key={ index }
                    className={classes.Menu__item}
                >
                    <a href="#0">link { link }</a>
                </li>
            )
        })
    }
    render() {
        const cls = [classes.Menu]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul className={ classes.Menu__list }>
                        { this.renderLinks() }
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop backdropClose={this.props.backdropClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Menu