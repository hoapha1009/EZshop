import axiosClient from './axiosClient';

const userAPI = {
    register(id) {
        const url = '/auth/local/register';
        return axiosClient.post(url);
    },
    login(data) {
        const url = '/auth/local';
        return axiosClient.post(url, data);
    },
};

export default userAPI;
