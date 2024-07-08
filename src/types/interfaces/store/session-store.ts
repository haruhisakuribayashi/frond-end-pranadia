import SessionType from "@/types/store/session-type";

interface SessionInterface {
  session: SessionType;
  getSession: () => string;
  addSave: (newSession: SessionType) => void;
  logout: () => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

export default SessionInterface;
