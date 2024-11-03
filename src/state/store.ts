import { create } from 'zustand';
import { TriviaQuestion } from '@/types';
import { fetchTriviaQuestions } from '@/api';
import { CORRECT_ANSWER, INCORRECT_ANSWER } from '@/shared/const';

interface QuizState {
  question: TriviaQuestion | null;
  userAnswer: string;
  answerSubmitted: boolean;
  feedback: string;
  loading: boolean;
  isButtonDisabled: boolean;
  isRateLimited: boolean;
  progress: number;
  setLoading: (loading: boolean) => void;
  setUserAnswer: (answer: string) => void;
  setAnswerSubmitted: (submitted: boolean) => void;
  setFeedback: (feedback: string) => void;
  setProgress: (progress: number) => void;
  generateQuestion: () => Promise<void>;
  checkAnswer: () => void;
  setRateLimited: (isRateLimited: boolean) => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  question: null,
  userAnswer: '',
  answerSubmitted: false,
  feedback: '',
  loading: false,
  isButtonDisabled: false,
  isRateLimited: false,
  progress: 0,
  setLoading: (loading) => set({ loading }),
  setUserAnswer: (answer) => set({ userAnswer: answer }),
  setAnswerSubmitted: (submitted) => set({ answerSubmitted: submitted }),
  setFeedback: (feedback) => set({ feedback }),
  setProgress: (progress) => set({ progress }),
  setRateLimited: (isRateLimited) => set({ isRateLimited }),
  generateQuestion: async () => {
    set({ loading: true, isButtonDisabled: true, progress: 0 });
    try {
      const questions = await fetchTriviaQuestions(1, (progress) => {
        set({ progress });
      });
      const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)];
      set({
        question: randomQuestion,
        userAnswer: '',
        feedback: '',
        answerSubmitted: false,
        loading: false,
        progress: 100,
      });
      setTimeout(() => {
        set({ isButtonDisabled: false });
      }, 5000);
    } catch (error) {
      console.error('Error generating question:', error);
      set({ loading: false, isButtonDisabled: false });
    }
  },
  checkAnswer: () => {
    const { question, userAnswer } = get();
    if (!question) return;

    const isCorrect =
      userAnswer.trim().toLowerCase() ===
      question.correct_answer.trim().toLowerCase();

    set({
      feedback: isCorrect
        ? `${CORRECT_ANSWER}`
        : `${INCORRECT_ANSWER} ${question.correct_answer}`,
      answerSubmitted: true,
    });
  },
}));
