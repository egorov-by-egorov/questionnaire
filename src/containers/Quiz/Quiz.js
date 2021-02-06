import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinisfedQuiz from "../../components/FinisfedQuiz/FinisfedQuiz";
import Loader from "../../components/UI/Loader/Loader";
import { connect } from 'react-redux';
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../store/actions/quiz";

class Quiz extends Component
{
    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.retryQuiz();
    }

    render() {
        return (
            <section className={classes.Quiz}>
                <div className={classes.QuizWrapper}>

                    { this.props.loading || !this.props.quiz
                    ? <Loader/>
                    : this.props.isFinished
                            ? <FinisfedQuiz
                                results={ this.props.results }
                                quiz={ this.props.quiz }
                                onClickHandler={this.props.retryQuiz}
                            />
                            : <ActiveQuiz
                                answers={ this.props.quiz[ this.props.answerActiveQuestionNumber ].answers }
                                question={ this.props.quiz[ this.props.answerActiveQuestionNumber ].question }
                                onAnswerItemClickHandler={ this.props.quizAnswerClick }
                                quizLength={ this.props.quiz.length }
                                answerActiveQuestionNumber={ this.props.answerActiveQuestionNumber + 1  }
                                answerState={this.props.answerState}
                            />
                    }

                </div>

            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        answerActiveQuestionNumber: state.quiz.answerActiveQuestionNumber,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);