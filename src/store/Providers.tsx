// Providers.tsx
import { useMemo, useReducer, useState } from "react";

import { RobotContext, SearchContext, UsersContext } from "./Contexts";
import { SearchContextType } from "~/interfaces/search";
import { UsersContextType, initUsersState } from "~/interfaces/users";
import { RobotReducer, UsersReducer } from "./Reducers";
import { RobotContextType, initRobotState } from "~/interfaces/robot";


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
    );
};

const RobotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [robotState, robotDispatch] = useReducer(RobotReducer, initRobotState);
    const robotContextValue = useMemo<RobotContextType>(() => [robotState, robotDispatch], [robotState, robotDispatch]);
    return (
        <RobotContext value={robotContextValue}>
            {children}
        </RobotContext>
    );
};

export {
    SearchProvider,
    UsersProvider,
    RobotProvider,
};