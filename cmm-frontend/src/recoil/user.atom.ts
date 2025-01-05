import { atom } from "recoil";
import { IUser } from "@/types/global.types";

const userAtom = atom<IUser>({
  key: "userDataAtom",
  default: {
    id: 0,
    username: "",
    email: "",
  },
});

export default userAtom;
