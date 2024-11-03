export interface TriviaQuestion {
  category: string;
  type: string; // "multiple" or "boolean"
  difficulty: string; // "easy", "medium", or "hard"
  question: string; // The trivia question itself
  correct_answer: string; // The correct answer
  incorrect_answers: string[]; // Array of incorrect answers
}

export interface TriviaResponse {
  response_code: number; // API response code
  results: TriviaQuestion[]; // Array of trivia questions
}
