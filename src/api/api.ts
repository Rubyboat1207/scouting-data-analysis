import axios from "axios"
import type { Form } from "./response/form";

const api_base_url = 'http://nebulouscereal.com:1337/api/v1/'

export const getForm: (id: string) => Promise<Form | null> = async (id: string) => {
    const form = await axios.get(api_base_url + `form?form_id=${id}`);
    if(form.status == 200) {
        const data = await form.data() as Form;
    
        return data;
    }
    return null;
}

export const getTeam: (teamid: string) => Promise<Form[]> = async (teamid: string) => {
    console.log(teamid)
    const form = await axios.get(api_base_url + `team/${teamid}`);
    const data = form.data as Form[];
    
    return data;
}