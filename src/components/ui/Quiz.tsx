import React, { useCallback, useEffect } from "react";
import { useQuizStore } from "@/state/store.ts";
import DOMPurify from "dompurify";
import { Progress } from "@/components/shadcn/progress.tsx";
import { Button } from "../shadcn/button.tsx";
import { CORRECT_ANSWER } from "@/shared/const.ts";

const Quiz: React.FC = () => {
  const {
    question,
    userAnswer,
    feedback,
    loading,
    answerSubmitted,
    isButtonDisabled,
    progress,
    setUserAnswer,
    setAnswerSubmitted,
    checkAnswer,
    generateQuestion,
  } = useQuizStore();

  const sanitizeQuestion = (text: string) => {
    const sanitizedText = DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });
    const tempElement = document.createElement("div");
    tempElement.innerHTML = sanitizedText;
    return tempElement.textContent || tempElement.innerText || "";
  };

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const handleNextQuestion = useCallback(() => {
    setAnswerSubmitted(false);
    generateQuestion();
  }, [generateQuestion, setAnswerSubmitted]);

  const feedbackColorClass = feedback.includes(CORRECT_ANSWER)
    ? "text-green-600"
    : "text-red-600";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-2xl w-full mx-auto p-6 bg-white rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Quizzly AI</h1>
        {loading ? (
          <div className="w-full mb-4">
            <Progress value={progress} className="h-2 bg-blue-500 rounded" />
          </div>
        ) : (
          question && (
            <div>
              <p className="mb-4">{sanitizeQuestion(question.question)}</p>
              <div className="space-y-2 mb-4">
                {question.incorrect_answers
                  .concat(question.correct_answer)
                  .sort()
                  .map((answer, index) => (
                    <label
                      key={index}
                      className="block bg-gray-100 p-2 rounded-xl hover:bg-gray-200"
                    >
                      <input
                        type="radio"
                        value={answer}
                        checked={userAnswer === answer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className="mr-2 rounded-full"
                      />
                      {answer}
                    </label>
                  ))}
              </div>
              {!answerSubmitted && (
                <Button
                  onClick={checkAnswer}
                  variant="outline"
                  disabled={!userAnswer}
                  className="w-full mb-4 rounded-3xl"
                >
                  Submit Answer
                </Button>
              )}
              {answerSubmitted && feedback && (
                <div className="mb-4">
                  <p className={`mb-2 mx-auto w-fit ${feedbackColorClass}`}>
                    {feedback}
                  </p>
                  <Button
                    onClick={handleNextQuestion}
                    disabled={isButtonDisabled}
                    variant="outline"
                    className="w-full rounded-3xl"
                  >
                    Next Question
                  </Button>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Quiz;
