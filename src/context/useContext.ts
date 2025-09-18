import { createContext } from "react";
import type { Users } from "../types/user";

export const UserCardContext = createContext<Users | undefined>(undefined)