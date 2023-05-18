import axios from "axios";
import { URL_DUMMY_JSON } from '../environments';

export class ApiHelper {

    static async login<Rq, Rs>(payload: Rq): Promise<Rs> {
        const { data } = await axios.post<Promise<Rs>>(
            `${ URL_DUMMY_JSON }/login`, 
            payload
        );

        return data;
    };

    static async getAllUsersByFilter<T>(token: string, query: string): Promise<T> {
        const { data } = await axios.get<T>(
            `${ URL_DUMMY_JSON}/users/search`,
            {
                headers: { Authorization: `Bearer ${ token }`},
                params: { q: query }
            }
        );

        return data;
    }

    static getPostById = async <T>(token: string, id: number): Promise<T> => {
        const { data } = await axios.get<T>(
            `${ URL_DUMMY_JSON }/posts/${ id }`,
            { headers: { Authorization: `Bearer ${ token }`} }
        );

        return data;
    }

    static insertPost = async <Rq, Rs>(token: string, payload: Rq): Promise<Rs> => {
        const { data } = await axios.post<Rs>(
            `${ URL_DUMMY_JSON }/posts/add`,
            payload,
            { headers: { Authorization: `Bearer ${ token }`} }
        );

        return data;
    }

}