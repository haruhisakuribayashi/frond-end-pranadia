import PromiseType from "@/types/store/promise-type";

interface CreatePromiseInterface {
  promise?: PromiseType;
  addPromise: (newPromise: PromiseType) => void;
}

export default CreatePromiseInterface;
