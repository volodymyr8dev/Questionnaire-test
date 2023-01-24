export interface QuestionI {
  id: number;
  type: string;
  question: string;
  answerOptions: string[];
  correctAnswer: string;
  isEdited: boolean;
  isAnswered: boolean;
  date: Date;
  answer?: string
}
