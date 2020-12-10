export class UsersCommentsService{
    url = 'https://jsonplaceholder.typicode.com/comments';

   async getUsersCommentsService(){
      return await fetch (this.url).then(value => value.json())

    }

}
export default UsersCommentsService;