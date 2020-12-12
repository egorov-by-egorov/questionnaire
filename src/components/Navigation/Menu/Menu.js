import React, { Component } from 'react';
import classes from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
]

class Menu extends Component
{
    clickHandler = () => {
        this.props.backdropClose();
    }
    renderLinks () {
       return links.map((link,index) => {
            return (
                <li
                    key={ index }
                >
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
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