import { IUser } from "~/interfaces/users";

export const getUsers = async (): Promise<{
    data: IUser[],
    message: string,
    statusCode: number,
}> => {
    const apiCall = window.electronAPIs
        ? window.electronAPIs.listUser().then(res => res)
        : fetch("http://localhost:3000/user").then(async res => ({
            data: await res.json() as IUser[],
            message: "Successfully retrieved data from the database [users]",
            statusCode: 200,
        }));

    return await apiCall;
};

export const deleteUser = async (id: string): Promise<{
    message: string,
    statusCode: number
}> => {
    const apiCall = window.electronAPIs ?
        window.electronAPIs.deleteUser(id).then(res => res) :
        {
            message: `Successfully deleted user with ID: ${id}`,
            statusCode: 200,
        }
    return apiCall;
};

export const launchUser = async (id: string): Promise<{
    message: string,
    statusCode: number
}> => {
    const apiCall = window.electronAPIs ?
        window.electronAPIs.launchUser(id).then(res => res) :
        {
            message: `Successfully launched browser for user with ID: ${id}`,
            statusCode: 200,
        }
    return apiCall;
};

export const createUser = async (user: IUser): Promise<{
    message: string,
    statusCode: number
}> => {
    const apiCall = window.electronAPIs ?
        window.electronAPIs.createUser(user).then(res => res) :
        {
            message: `Successfully created new user with ID: ${user.info.id}`,
            statusCode: 200,
        }
    return apiCall;
}

export const getUser = async (id: string): Promise<{
    data: IUser,
    message: string,
    statusCode: number,
}> => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.getUser(id).then(res => resolve(res)) :
            fetch(`http://localhost:3000/user`)
                .then(async res => await res.json() as IUser[])
                .then(users => {
                    const user = users.find(item => item.info.id === id);
                    if (user) {
                        resolve({
                            data: user,
                            message: `Successfully retrieved user data with ID ${id}`,
                            statusCode: 200,
                        });
                    } else {
                        // handle when user === undefined if item.info.id !== id
                    };
                })
                .catch(err => reject(err));
    });
};

export const updateUser = async (user: IUser): Promise<{
    message: string,
    statusCode: number,
}> => {
    return new Promise((resolve, reject) => {
        window.electronAPIs ?
            window.electronAPIs.updateUser(user).then(res => resolve(res)).catch(err => reject(err)) :
            resolve({
                message: `Successfully updated user with ID: ${user.info.id}`,
                statusCode: 200,
            });
    });
}