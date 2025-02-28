
type RobotAPIsType = Promise<{
    data: IRobot,
    message: string,
    statusCode: number,
}>;
// user: (payload) => ipcRenderer.invoke("user", payload),
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
        updateRobotConfig: (robotConfig: IRobot) => RobotAPIsType
        runInteract: (users: string[], robotConfig: IRobot) => RobotAPIsType
    };
}

