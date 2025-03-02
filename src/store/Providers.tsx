// Providers.tsx
import { useMemo, useReducer, useState } from "react";

import { RobotContext, RobotInteractContext, SearchContext, UsersContext } from "./Contexts";
import { SearchContextType } from "~/interfaces/search";
import { UsersContextType, initUsersState } from "~/interfaces/users";
import { RobotInteractReducer, RobotReducer, UsersReducer } from "./Reducers";
import { initRobotInteract, initRobotState, RobotContextType, RobotInteractContextType } from "~/interfaces/robot";

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

const RobotInteractProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [robotInteractState, robotInteractDispatch] = useReducer(RobotInteractReducer, initRobotInteract);
    const robotInteractValue = useMemo<RobotInteractContextType>(() => [robotInteractState, robotInteractDispatch], [robotInteractState, robotInteractDispatch]);
    return (
        <RobotInteractContext value={robotInteractValue}>
            {children}
        </RobotInteractContext>
    );
};

export {
    SearchProvider,
    UsersProvider,
    RobotProvider,
    RobotInteractProvider,
};