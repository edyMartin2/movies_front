import axios from "axios"
import MoviesType from "../types/MoviesType"

const apiUrl = "http://localhost:3000/movies"

class Movies {

    async Get(id: string = ""): Promise<any> {
        return await axios.get(apiUrl).then(res => { return res.data }).catch(() => { return [] })
    }

    async Save(Movie: MoviesType) {

        let data = JSON.stringify(Movie);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: apiUrl,
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