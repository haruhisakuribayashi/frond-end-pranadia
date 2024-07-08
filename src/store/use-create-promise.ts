import { create } from "zustand";
import CreatePromiseInterface from "@/types/interfaces/store/create-promise";
import PromiseType from "@/types/store/promise-type";

const useCreatePromise = create<CreatePromiseInterface>((set) => ({
  promise: {
    pasien: "",
    poli: "",
    date: "",
    time: "",
    layanan: "",
    administrasi: "",
    total: 0,
  },
  addPromise: (newPromise) => set({ promise: newPromise }),
}));

export default useCreatePromise;
