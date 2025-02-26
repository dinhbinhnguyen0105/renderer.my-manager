declare interface Window {
    electronAPIs?: {
        user: (args: { url: string }) => Promise<{ data: User[] }>;
    };
}