
type APIsType = Promise<{
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
        launchUser: ({ id: string, isMobile: boolean, proxy: string }) => Promise<{
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
        }>;
        updateUser: (user: IUser) => Promise<{
            message: string,
            statusCode: number,
        }>;

        getRobotConfig: () => APIsType;
        updateRobotConfig: (robotConfig: IRobot) => APIsType;
        runInteract: (users: string[], robotConfig: IRobot) => APIsType;

        getSetting: () => APIsType;
        updateSetting: (settings: ISetting) => APIsType;
    };
}

