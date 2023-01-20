import { QuizQuestion } from "./QuizQuestion.interface";

export interface QuizQuestionText extends QuizQuestion {
    type: "TEXT",
    answer: string
}