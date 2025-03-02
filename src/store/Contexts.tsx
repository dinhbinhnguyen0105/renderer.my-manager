// Contexts.tsx
import { createContext, } from "react";
import { initRobotInteract, initRobotState, RobotContextType, RobotInteractContextType } from "~/interfaces/robot";
import { SearchContextType } from "~/interfaces/search";
import { UsersContextType } from "~/interfaces/users";

const SearchContext = createContext<SearchContextType>(["", () => { }]);
const UsersContext = createContext<UsersContextType>([[], () => { }]);
const RobotContext = createContext<RobotContextType>([initRobotState, () => { }]);
const RobotInteractContext = createContext<RobotInteractContextType>([initRobotInteract, () => { }]);

export {
    SearchContext,
    UsersContext,
    RobotContext,
    RobotInteractContext
};
