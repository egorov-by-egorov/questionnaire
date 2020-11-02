import React from 'react'
import classes from './AnswerList.module.css'

const AnswerList = props => {

    return (
        <ul className={classes.AnswerList}>
            { props.answers.map((answer, index) => {
                const cls = [classes.AnswerItem];
                cls.push(classes[props.answerState ? props.answerState[answer.id] : null]);
                return (
                    <li
                        key={index}
                        className={cls.join(' ')}
                        onClick={() => props.onAnswerItemClickHandler(answer.id)}
                    >
                        { answer.text }
                    </li>
                )
            }) }
        </ul>
    )
}

export default AnswerList;