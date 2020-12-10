export class UsersService {

url = 'https://jsonplaceholder.typicode.com/users';

getUsersService(){
    return fetch (this.url)
    .then(value => value.json())
    .then(value => {return value;});
}

}
export default UsersService;
