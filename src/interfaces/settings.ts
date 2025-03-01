export type ISettings = {
    isMobile: boolean,
    thread: number,
    proxy: string,
};

const initSettingsState = {
    isMobile: false,
    thread: 1,
    proxy: "",
};

export {
    initSettingsState,
};