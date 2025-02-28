// Contexts.tsx
import { createContext, } from "react";
import { RobotContextType, initRobotState } from "~/interfaces/robot";
import { SearchContextType } from "~/interfaces/search";
import { UsersContextType } from "~/interfaces/users";

const SearchContext = createContext<SearchContextType>(["", () => { }]);
const UsersContext = createContext<UsersContextType>([[], () => { }]);
const RobotContext = createContext<RobotContextType>([initRobotState, () => { }]);


export {
    SearchContext,
    UsersContext,
    RobotContext,
};
