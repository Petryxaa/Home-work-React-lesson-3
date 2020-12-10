export class UsersPostService {


    url = 'https://jsonplaceholder.typicode.com/posts';

    getUsersPostService(){
        return fetch (this.url)
        .then(value => value.json())
        .then(value => {return value;});
    }
    
    }
    export default UsersPostService;
    





