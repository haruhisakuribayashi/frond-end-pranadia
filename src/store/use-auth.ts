"use server";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import SessionInterface from "@/types/interfaces/store/session-store";
import SessionType from "@/types/store/session-type";
import { cookies } from "next/headers";

const useSessionStore = create<SessionInterface>()(
  persist(
    (set, get) => ({
      session: { type: "Bearer", token: "" }, // Inisialisasi dengan nilai kosong

      getSession: () => {
        return get().session.type + " " + get().session.token;
      },

      addSave: (newSession: SessionType) => {
        set({ session: newSession });
        get().saveToLocalStorage(); // Simpan ke localStorage saat session diubah
      },

      logout: () => {
        set({ session: { type: "", token: "" } });
        get().saveToLocalStorage(); // Simpan ke localStorage saat logout
      },

      saveToLocalStorage: () => {
        const session = get().session;
        // localStorage.setItem("session", JSON.stringify(session));
        cookies().set({
          name: "name",
          value: session.token,
          httpOnly: false,
          path: "/",
        });
      },

      loadFromLocalStorage: () => {
        const session = localStorage.getItem("session");
        if (session) {
          set({ session: JSON.parse(session) });
        }
      },
    }),
    {
      name: "session", // Nama untuk penyimpanan di localStorage
      getStorage: () => localStorage, // Pilih penyimpanan, misalnya localStorage
      partialize: (state) => ({ session: state.session }), // Partialize to only persist session
    }
  )
);

useSessionStore.getState().loadFromLocalStorage();

export default useSessionStore;
