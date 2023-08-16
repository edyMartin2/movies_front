import axios from "axios"

const apiUrl = "http://localhost:3000/plataforms"

class PlataformService {

    async Get(id: string = ""): Promise<any> {
        return await axios.get(apiUrl).then(res => { return res.data }).catch(() => { return [] })
    }
}

export default PlataformService