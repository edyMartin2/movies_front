import axios from "axios"
import MoviesType from "../types/MoviesType"
import env from '../env'

const apiUrl = `${env.URL}/movies`

class Movies {

    async Get(id: string = "", page: number = 1): Promise<any> {
        const url = id !== "" ? `${apiUrl}/${id}` : `${apiUrl}?page=${page}`
        return await axios.get(url).then(res => { return res.data }).catch(() => { return [] })
    }

    async Save(Movie: MoviesType, id: string = "") {

        let data = JSON.stringify(Movie);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: id !== "" ? `${apiUrl}/${id}` : apiUrl,
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
                console.log('Erorr', error)
                return []
            });

    }

    async Delete(id: string) {


        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `${apiUrl}/${id}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return await axios.request(config)
            .then((response) => {
                return { ...response.data, status: response.status }
            })
            .catch(() => {
                return { status: 500 }
            });

    }
}

export default Movies