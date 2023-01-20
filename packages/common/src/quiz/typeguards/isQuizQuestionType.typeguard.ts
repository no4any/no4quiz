import { QuizQuestionType, SINGLE_QUESTION, TEXT_QUESTION } from "../QuizQuestionType.type";

export const isQuizQuestionType = (obj: unknown): obj is QuizQuestionType =>{
    if(typeof obj === "string") {
        if(obj === SINGLE_QUESTION || obj === TEXT_QUESTION) {
            return true;
        }
    }
    return false;
}