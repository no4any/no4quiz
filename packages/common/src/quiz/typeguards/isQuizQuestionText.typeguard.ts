import { QuizQuestionText } from "../QuizQuestionText.interface";
import { TEXT_QUESTION } from "../QuizQuestionType.type";
import { isQuizQuestion } from "./isQuizQuestion.typeguard";

export const isQuizQuestionText = (obj: unknown): obj is QuizQuestionText => {
    if (!isQuizQuestion(obj)) {
        return false;
    }
    const question: QuizQuestionText = obj as QuizQuestionText;
    if (question.type !== TEXT_QUESTION) {
        return false;
    }
    if (typeof question.answer !== "string") {
        return false;
    }
    return false;
}