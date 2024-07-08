import PromiseType from "@/types/store/promise-type";

interface HistoryPromiseInterface {
  history: PromiseType[];
  addHistory: (newHistory: PromiseType) => void;
}

export default HistoryPromiseInterface;
