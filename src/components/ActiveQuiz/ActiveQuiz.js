import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswerList from './AnswerList/AnswerList';

const ActiveQuiz = props => {

    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>
                        2.&nbsp;
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
    )
}

export default ActiveQuiz;