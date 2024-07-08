import HistoryPromiseInterface from "@/types/interfaces/store/history-promise";
import PromiseType from "@/types/store/promise-type";
import { create } from "zustand";

const useHistoryPromise = create<HistoryPromiseInterface>((set) => ({
  history: [],
  addHistory: (newHistory: PromiseType) =>
    set((state) => ({ history: [...state.history, newHistory] })),
}));
