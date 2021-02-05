import React from "react";
import Styles from './Input.module.css'

function isInvalid ({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [Styles.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push(Styles.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                id={htmlFor}
                type={inputType}
                value={props.value}
                onChange={props.onChange}
            />
            {isInvalid(props) ?
                <div className={Styles.InputBlockError}>{props.errorMessage || ''}</div>
                : null
            }

        </div>
    )
}

export default Input