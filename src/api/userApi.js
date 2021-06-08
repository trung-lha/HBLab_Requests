import axiosClient from "./axiosClient";

const userAPI = {
    getAll: (params) => {
        const url = 'http://127.0.0.1:8000/api/user';
        return axiosClient.get(url, { params });
    },
    login: async (data) => {
        const url = 'http://127.0.0.1:8000/api/login';
        await axiosClient.post(url, { data })
            .then((response) => {
                return response ;
            }, (error) => {
                return error;
            });
        // const body

    }
}


export default userAPI;