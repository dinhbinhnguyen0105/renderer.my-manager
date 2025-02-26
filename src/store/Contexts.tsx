// Contexts.tsx
import { createContext, } from "react";
// import IUser from "~/interfaces/users";

const SearchContext = createContext(["", () => { }]);
const UsersContext = createContext([[], () => { }]);

export {
    SearchContext,
    UsersContext
};
