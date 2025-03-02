// Robot.ts
import { IRobot, IRobotInteract } from "~/interfaces/robot";

type RobotAPIsType = Promise<{
    data: IRobotInteract | null,
    message: string,
    statusCode: number,
}>;

const getRobotInteractConfig = (): RobotAPIsType => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.getRobotInteractConfig()
                .then(res => resolve(res))
                .catch(err => reject(err)) :
            fetch("http://localhost:3000/interact")
                .then(async res => resolve({
                    data: await res.json() as IRobotInteract, // { likeAndComment: ILikeAndComment }
                    message: "Successfully retrieved data from the database [robot]",
                    statusCode: 200,
                }))
                .catch(err => reject(err));

    });
};
const updateRobotInteractConfig = async (robotInteractConfig: IRobotInteract): RobotAPIsType => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.updateRobotInteractConfig(robotInteractConfig)
                .then(res => resolve(res))
                .catch(err => reject(err)) :
            resolve({
                data: null,
                message: `Successfully updated robot config`,
                statusCode: 200,
            });

    });
};
const runRobotInteract = async (userIds: string[], robotInteractConfig: IRobotInteract): RobotAPIsType => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.runRobotInteract(userIds, robotInteractConfig)
                .then(res => resolve(res))
                .catch(err => reject(err)) : resolve({
                    data: null,
                    message: `Successfully run interact`,
                    statusCode: 200,
                });

    });
};

export {
    getRobotInteractConfig,
    updateRobotInteractConfig,
    runRobotInteract,
};
