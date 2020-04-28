import config from "../config";

export const createApiUrl = pathArr => {
    return `${config.apiUrl}/${pathArr.join("/")}`;
};
