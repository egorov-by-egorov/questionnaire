import React from 'react'
import classes from './FinisfedQuiz.module.css'

const FinisfedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0)

    return (
        <div className={classes.FinisfedQuiz}>
            <ul>

                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ];

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}

            </ul>
            <p>Правильно { successCount } из { props.quiz.length }</p>
            <div>
                <button onClick={props.onRetryHandler}>Повторить</button>
            </div>
        </div>
    )
}

export default FinisfedQuiz