import { register,login } from "../controller/authentication.js";
import {getUser,createUser,updateUser,deleteUser,getPost,createPost,updatePost,deletePost,getComment,creatComment,creatComment,deleteComment,updateComment,creatComment } from "../controller/controller.js";

const userRoutes = (app)=>{
    app.route('/user/:id')
    .get(getUser)
    .post(createUser)
    .update(updateUser)
    .delete(deleteUser)
    app.route('user/:id')
    .get(getPost)
    .post(createPost)
    .update(updatePost)
    .delete(deletePost)
    app.route('user/:id')
    .get(getComment)
    .post(creatComment)
    .update(updateComment)
    .delete(deleteComment)
  
}
//authenticate the authers 
app.route('/auth/register')
.post(register);

app.route('/auth/login')
.post(login);

export default userRoutes;
