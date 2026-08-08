export type LiveQuizStatus = 'draft' | 'lobby' | 'in-progress' | 'between-questions' | 'podium' | 'finished';

export interface LiveQuizQuestion {
  questionId: string;
  type: string;
  statement: string;
  options: string[];
  correctAnswers?: string[]; // Solo para profes
  matchingOptions?: string[];
  points: number;
  imageUrl?: string;
  timeLimitSeconds: number;
}

export interface LiveQuizParticipant {
  userId: string;
  name: string;
  totalScore: number;
  correctAnswers: number;
  totalResponseTimeMs: number;
  currentStreak: number;
}

export interface LiveQuiz {
  _id: string;
  title: string;
  description?: string;
  pin: string;
  teacherId: string;
  groupIds: string[];
  status: LiveQuizStatus;
  questions: LiveQuizQuestion[];
  participants: LiveQuizParticipant[];
  answers: any[];
  currentQuestionIndex: number;
  createdAt: string;
  updatedAt: string;
}

// Payloads
export interface CreateLiveQuizPayload {
  title: string;
  description?: string;
  groupIds?: string[];
  questions: LiveQuizQuestion[];
}

export interface ImportQuestionsPayload {
  questionIds: string[];
  defaultTimeLimitSeconds: number;
}
