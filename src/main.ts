import { 
    getAllUsers, 
    getPostById, 
    insertPost, 
    login 
} from "./modules/users/controller";
import { Login } from './interfaces/login.interface';
import { PostInsert } from './interfaces/post.interface';

const payloadUser: Login = {
    username: 'kminchelle',
    password: '0lelplR'
};

const payloadPost: PostInsert = {
    title: 'Hello world',
    userId: 1
};

login(payloadUser)
    .then(respLogin => {
        return getAllUsers('John');
    })
    .then(respUsers => {
        return getPostById(1);
    })
    .then(respPost => {
        return insertPost(payloadPost);
    })
    .then(respInsertPost => {
        const { id, title } = respInsertPost;

        console.log(id, title);
    })
    .catch(console.error);    
