import { ApiHelper } from '../../helpers/apiHelper';
import { Login } from '../../interfaces/login.interface';
import { 
    UserLogin, 
    UserGetAll, 
    User 
} from '../../interfaces/user.interface';
import { 
    PostGetId, 
    PostInsert, 
    PostInsertResponse 
} from '../../interfaces/post.interface';

let apiToken: string = ''; 

const login = async (payload: Login): Promise<number> => {
    try {
        const { token, id } = await ApiHelper.login<Login, UserLogin>(payload);

        apiToken = token;

        return id;
    } catch (error) {
        throw error;
    }
}

const getAllUsers = async (query: string): Promise<User[]> => {
    try {
        const { users } = await ApiHelper.getAllUsersByFilter<UserGetAll>(apiToken, query);

        return users;
    } catch (error) {
        throw error;
    }
}

const getPostById = async (id: number): Promise<string> => {
    try {
        const { title } = await ApiHelper.getPostById<PostGetId>(apiToken, id);

        return title;
    } catch (error) {
        throw error;
    }
}

const insertPost = async (payload: PostInsert): Promise<PostInsertResponse> => {
    try {
        const data = await ApiHelper.insertPost<PostInsert, PostInsertResponse>(apiToken, payload);

        return data;
    } catch (error) {
        throw error;
    }
}


export {
    login,
    getAllUsers,
    getPostById,
    insertPost
};