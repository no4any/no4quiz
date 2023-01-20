import { QuizQuestionSingle } from "../QuizQuestionSingle.interface";
import { SINGLE_QUESTION } from "../QuizQuestionType.type";
import { isQuizQuestion } from "./isQuizQuestion.typeguard";
import { isQuizQuestionSingleAnswer } from "./isQuizQuestionSingleAnswer.typeguard";

export const isQuizQuestionSingle = (obj: unknown): obj is QuizQuestionSingle => {
    if (!isQuizQuestion(obj)) {
        return false;
    }

    const question: QuizQuestionSingle = obj as QuizQuestionSingle;

    if (question.type !== SINGLE_QUESTION) {
        return false;
    }

    if (question.answers.every(isQuizQuestionSingleAnswer)) {
        return false;
    }

    return true;
}