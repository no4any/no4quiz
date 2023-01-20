import { QuizQuestion } from "../QuizQuestion.interface";
import { isQuizQuestionType } from "./isQuizQuestionType.typeguard";

export const isQuizQuestion = (obj: unknown): obj is QuizQuestion => {
    if (typeof obj !== "object") {
        return false;
    }
    const question: QuizQuestion = obj as QuizQuestion;
    if (!isQuizQuestionType(question.type)) {
        return false;
    }
    if (typeof question.hint !== "string") {
        return false;
    }
    if (typeof question.question !== "string") {
        return false;
    }
    if (question.image !== undefined) {
        if (typeof question.image !== "string") {
            return false;
        }
    }
    if (typeof question.soundOnOpening !== "string") {
        return false;
    }
    if (typeof question.soundOnSuccess !== "string") {
        return false;
    }
    if (typeof question.soundOnFail !== "string") {
        return false;
    }
    return true;
}