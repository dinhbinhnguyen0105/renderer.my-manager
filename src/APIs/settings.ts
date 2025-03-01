import { ISettings } from "~/interfaces/settings";

type SettingAPIsType = Promise<{
    data: ISettings | null,
    message: string,
    statusCode: number,
}>;

const getSetting = (): SettingAPIsType => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.getSetting()
                .then(res => resolve(res))
                .catch(err => reject(err)) :
            fetch("http://localhost:3000/settings")
                .then(async (res) => resolve({
                    data: await res.json() as ISettings,
                    message: "",
                    statusCode: 200,
                }))
                .catch(err => reject(err));

    });
};

const updateSetting = (settings: ISettings): SettingAPIsType => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.updateSetting(settings)
                .then(res => resolve(res))
                .catch(err => reject(err)) :
            resolve({
                data: null,
                message: `Successfully update settings`,
                statusCode: 200,
            });
    });
}

export {
    getSetting,
    updateSetting,
};