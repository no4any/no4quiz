import {QuizQuestionType} from "./QuizQuestionType.type"

export interface QuizQuestion {
    type: QuizQuestionType,
    hint: string,
    question: string,
    image?: string,
    soundOnOpening: string,
    soundOnSuccess: string,
    soundOnFail: string
}