import { QuizQuestion } from "./QuizQuestion.interface";
import { QuizQuestionSingleAnswer } from "./QuizQuestionSingleAnswer.interface";

export interface QuizQuestionSingle extends QuizQuestion {
    type: "SINGLE",
    answers: QuizQuestionSingleAnswer[]
}