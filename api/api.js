import axios from "axios";

async function request(
    url,
    config,
) {
    const response = await axios.get(url,config);
    if(response.status === 200) {
        if(response.data.results) {
            return response.data.results;
        } else {
            return await response.data;
        }
    } else {
        throw new Error(`${response.status}`)
    }
}


export const createApiClient = (APIURL) => {
    return {
        getPokemons: async () => {
            try {            
                return await request(APIURL);
            } catch (error) {
                throw new Error(`${error}`);
            }
        },
        getPokemons: async (count) => {
            try {            
                return await request(APIURL, {
                    params: {
                        limit: count
                    }
                });
            } catch (error) {
                throw new Error(`${error}`);
            }
        },
        getPokemon: async (name) => {
            try {            
                return await request(`${APIURL}/${name}`);
            } catch (error) {
                throw new Error(`${error}`);
            }
        }
    }
}