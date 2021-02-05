import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinisfedQuiz from "../../components/FinisfedQuiz/FinisfedQuiz";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends Component
{
    state = {
        results: {},
        isFinished: false,
        answerActiveQuestionNumber: 0,
        answerState: null,
        quiz: [],
        loading: true
    }

    onAnswerItemClickHandler = answerId => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.answerActiveQuestionNumber];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {

            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        answerActiveQuestionNumber: this.state.answerActiveQuestionNumber + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout);
            }, 1000);

        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }

    }

    isQuizFinished () {
        return this.state.answerActiveQuestionNumber + 1 === this.state.quiz.length
    }

    onRetryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            answerActiveQuestionNumber: 0,
            answerState: null
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`);
            const quiz = response.data;

            this.setState({
                quiz,
                loading: false
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <section className={classes.Quiz}>
                <div className={classes.QuizWrapper}>

                    { this.state.loading
                    ? <Loader/>
                    : this.state.isFinished
                            ? <FinisfedQuiz
                                results={ this.state.results }
                                quiz={ this.state.quiz }
                                onClickHandler={this.onRetryHandler}
                            />
                            : <ActiveQuiz
                                answers={ this.state.quiz[ this.state.answerActiveQuestionNumber ].answers }
                                question={ this.state.quiz[ this.state.answerActiveQuestionNumber ].question }
                                onAnswerItemClickHandler={ this.onAnswerItemClickHandler }
                                quizLength={ this.state.quiz.length }
                                answerActiveQuestionNumber={ this.state.answerActiveQuestionNumber + 1  }
                                answerState={this.state.answerState}
                            />
                    }

                </div>

            </section>
        )
    }
}

export default Quiz;