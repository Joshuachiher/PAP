import { create } from "zustand";

export const useAnswersStore = create((set) => ({
  answers: {},
  setAnswer: (questionId, value) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: value },
    })),
  resetAnswers: () => set({ answers: {} }),
}));