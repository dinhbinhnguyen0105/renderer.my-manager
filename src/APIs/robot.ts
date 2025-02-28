// Robot.ts
import { IRobot } from "~/interfaces/robot";

type RobotAPIsType = Promise<{
    data: IRobot | null,
    message: string,
    statusCode: number,
}>;

const getRobotConfig = (): RobotAPIsType => {
    return new Promise((resolve, reject) => {
        console.log("Fetch");
        window.electronAPIs ?
            window.electronAPIs.getRobotConfig()
                .then(res => resolve(res))
                .catch(err => reject(err)) :
            fetch("http://localhost:3000/robot")
                .then(async res => ({
                    data: await res.json() as IRobot,
                    message: "Successfully retrieved data from the database [robot]",
                    statusCode: 200,
                }))
                .catch(err => reject(err));

    });
};
const updateRobotConfig = async (robotConfig: IRobot): RobotAPIsType => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.updateRobotConfig(robotConfig)
                .then(res => resolve(res))
                .catch(err => reject(err)) : resolve({
                    data: null,
                    message: `Successfully updated robot config`,
                    statusCode: 200,
                });

    });
};
const runInteract = async (userIds: string[], robotConfig: IRobot): RobotAPIsType => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.runInteract(userIds, robotConfig)
                .then(res => resolve(res))
                .catch(err => reject(err)) : resolve({
                    data: null,
                    message: `Successfully updated robot config`,
                    statusCode: 200,
                });

    });
};

export {
    getRobotConfig,
    updateRobotConfig,
    runInteract,
}