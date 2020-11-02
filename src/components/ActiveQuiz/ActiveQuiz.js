import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswerList from './AnswerList/AnswerList';

const ActiveQuiz = props => {

    return (
        <React.Fragment>
            <h1>Ответье на все вопросы</h1>
            <div className={classes.ActiveQuiz}>
                <p className={classes.Question}>
                    <span>
                        <strong>
                            { props.answerActiveQuestionNumber }.&nbsp;
                        </strong>
                        { props.question }
                    </span>
                    <small>{ props.answerActiveQuestionNumber } из { props.quizLength }</small>
                </p>
                <AnswerList
                    answers={ props.answers }
                    onAnswerItemClickHandler={props.onAnswerItemClickHandler}
                    answerState={props.answerState}
                />
            </div>
        </React.Fragment>
    )
}

export default ActiveQuiz;