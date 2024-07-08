import { create } from "zustand";

export interface User {
  name: string;
  email: string;
  tgl_lahir: string;
  title_pasien: string;
  status_kawin: string;
  tempat_lahir: string;
  jenis_kelamin: string;
  alamat: string;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  kelurahan: string;
  foto_ktp: string;
  no_ktp: string;
  pekerjaan: string;
  pendidikan: string;
  agama: string;
  no_telepon: string;
  pelayanan: string;
  nama_keluarga: string;
  no_telepon_keluarga: string;
  alamat_keluarga: string;
  hubungan_keluarga: string;
  password: string;
  password_confirmation: string;
}

interface UserStore {
  user: User;
  setUser: (newUser: Partial<User>) => void;
  resetUser: () => void;
}

const initialUser: User = {
  name: "",
  email: "",
  tgl_lahir: "",
  title_pasien: "",
  status_kawin: "",
  tempat_lahir: "",
  jenis_kelamin: "",
  alamat: "",
  provinsi: "",
  kabupaten: "",
  kecamatan: "",
  kelurahan: "",
  foto_ktp: "photo.jpg",
  no_ktp: "",
  pekerjaan: "",
  pendidikan: "",
  agama: "",
  no_telepon: "",
  pelayanan: "",
  nama_keluarga: "",
  no_telepon_keluarga: "",
  alamat_keluarga: "",
  hubungan_keluarga: "",
  password: "",
  password_confirmation: "",
};

const useUserStore = create<UserStore>((set) => ({
  user: initialUser,
  setUser: (newUser) =>
    set((state) => ({ user: { ...state.user, ...newUser } })),
  resetUser: () => set(() => ({ user: initialUser })),
}));

export default useUserStore;
