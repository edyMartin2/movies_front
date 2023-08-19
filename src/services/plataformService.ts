import axios from "axios"
import env from '../env'

const apiUrl =  `${env.URL}/plataforms`


class PlataformService {

    async Get(id: string = ""): Promise<any> {
        return await axios.get(apiUrl).then(res => { return res.data }).catch(() => { return [] })
    }
}

export default PlataformService