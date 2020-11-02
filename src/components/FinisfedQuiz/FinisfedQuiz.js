import React from 'react'
import classes from './FinisfedQuiz.module.css'
import Button from '../UI/Button/Button'

const FinisfedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0)

    return (
        <React.Fragment>
            <h1>Результаты Опроса</h1>
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
                    <Button onRetryHandler={ props.onRetryHandler } type={"primary"}>Повторить</Button>
                    <Button type={"success"}>Перейти в список тестов</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FinisfedQuiz