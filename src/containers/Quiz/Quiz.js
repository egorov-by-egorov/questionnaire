import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinisfedQuiz from "../../components/FinisfedQuiz/FinisfedQuiz";

class Quiz extends Component
{
    state = {
        results: {},
        isFinished: false,
        answerActiveQuestionNumber: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 3,
                answers: [
                    { text: 'Зеленый', id:1 },
                    { text: 'Красный', id:2 },
                    { text: 'Синий', id:3 },
                    { text: 'Черный', id:4 }
                ]
            },
            {
                id: 2,
                question: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 5,
                answers: [
                    { text: '1701', id:1 },
                    { text: '1709', id:2 },
                    { text: '2020', id:3 },
                    { text: '1809', id:4 },
                    { text: '1703', id:5 }
                ]
            },
            {
                id: 3,
                question: 'Какое животное говорит "Idddiii Nahooooy"?',
                rightAnswerId: 4,
                answers: [
                    { text: 'Барсик', id:1 },
                    { text: 'Тузик', id:2 },
                    { text: 'Волк', id:3 },
                    { text: 'Дядя Витя', id:4 },
                ]
            }
        ]
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

    render() {
        return (
            <section className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответье на все вопросы</h1>
                    {
                        this.state.isFinished
                            ? <FinisfedQuiz
                                results={ this.state.results }
                                quiz={ this.state.quiz }
                                onRetryHandler={this.onRetryHandler}
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