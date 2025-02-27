// Contexts.tsx
import { createContext, } from "react";
import { SearchContextType } from "~/interfaces/search";
import { UsersContextType } from "~/interfaces/users";

const SearchContext = createContext<SearchContextType>(["", () => { }]);
const UsersContext = createContext<UsersContextType>([[], () => { }]);

export {
    SearchContext,
    UsersContext
};
