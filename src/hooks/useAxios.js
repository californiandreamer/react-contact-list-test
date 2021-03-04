import Axios from "axios";

export const axiosGet = async (path, headers) => {
    const request = await Axios.get(path, headers).then((res) => res.data);
    return request;
};
