// Providers.tsx
import { useMemo, useReducer, useState } from "react";

import { SearchContext, UsersContext } from "./Contexts";
import { SearchContextType } from "~/interfaces/search";
import { UsersContextType } from "~/interfaces/users";
import { initUsersState, UsersReducer } from "./Reducers";


const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchValue, setSearchValue] = useState("");

    const searchContextValue = useMemo<SearchContextType>(() => ([searchValue, setSearchValue]), [searchValue, setSearchValue]);
    return (
        <SearchContext.Provider value={searchContextValue}>
            {children}
        </SearchContext.Provider>
    );
};

const UsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [usersState, usersDispatch] = useReducer(UsersReducer, initUsersState)
    const usersContextValue = useMemo<UsersContextType>(() => [usersState, usersDispatch], [usersState, usersDispatch]);

    return (
        <UsersContext value={usersContextValue}>
            {children}
        </UsersContext>
    )
}

export {
    SearchProvider,
    UsersProvider,
};