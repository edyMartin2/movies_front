import axios, { AxiosRequestConfig } from "axios"
import env from "../env";
import CommentData from "../types/CommentData";

const apiUrl = env.URLComments

class CommentService {

    async Save(CommentData: CommentData) {

        let data = JSON.stringify(CommentData);

        let config: AxiosRequestConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${apiUrl}/comment`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios.request(config)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log(error)
                return []
            });

    }

    async Get() {
        let config: AxiosRequestConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiUrl}/comments`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return await axios.request(config)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log(error)
                return []
            });
    }

    async GetByFilter(id: string) {
        let config: AxiosRequestConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiUrl}/comments/platform/${id}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return await axios.request(config)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log(error)
                return []
            });
    }

}

export default CommentService