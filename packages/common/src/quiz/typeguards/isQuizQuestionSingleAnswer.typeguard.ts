import { QuizQuestionSingleAnswer } from "../QuizQuestionSingleAnswer.interface";

export const isQuizQuestionSingleAnswer = (obj: unknown): obj is QuizQuestionSingleAnswer => {
    if(typeof obj !== "object") {
        return false;
    }

    const answer:QuizQuestionSingleAnswer = obj as QuizQuestionSingleAnswer;

    if(typeof answer.answer !== "string") {
        return false;
    }

    if(answer.isCorrect !== undefined) {
        if(typeof answer.isCorrect !== "boolean") {
            return false;
        }
    }

    return true;
}