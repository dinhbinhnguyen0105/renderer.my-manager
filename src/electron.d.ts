
type RobotAPIsType = Promise<{
    data: IRobot,
    message: string,
    statusCode: number,
}>;

declare interface Window {
    electronAPIs?: {
        listUser: () => Promise<{
            data: IUser[],
            message: string,
            statusCode: number,
        }>;
        deleteUser: (id: string) => Promise<{
            message: string,
            statusCode: number
        }>;
        launchUser: (id: string) => Promise<{
            message: string,
            statusCode: number
        }>;
        createUser: (user: IUser) => Promise<{
            message: string,
            statusCode: number
        }>;
        getUser: (id: string) => Promise<{
            data: IUser,
            message: string,
            statusCode: number
        }>
        updateUser: (user: IUser) => Promise<{
            message: string,
            statusCode: number,
        }>;

        getRobotConfig: () => RobotAPIsType
        updateRobotConfig: (robotConfig) => RobotAPIsType
        runInteract: (users, robotConfig) => RobotAPIsType
    };
}