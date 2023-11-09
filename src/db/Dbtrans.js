import mongoose from 'mongoose';
import md5 from 'md5';

export class Dbtrans{
    constructor(mondodbusername, mongodbpass){
        this.Mongouser = mondodbusername;
        this.Mongopass = mongodbpass;
    }

    authenticateAUser(username,password){
        mongoose.connect("mongodb+srv://"+this.Mongouser+":"+this.Mongopass+"@cluster0.c9xlloe.mongodb.net/userDB?retryWrites=true&w=majority", { useNewUrlParser: true });
        const userSchema = new mongoose.Schema({ username: String, password: String });
        const User = new mongoose.model('users', userSchema); 
        User.findOne({username:username}).then((foundUser)=>{
            if(foundUser){
                if(foundUser.password===md5(password)){
                    return true;
                    
                }
                else{
                    return false;
                    
                }
            }
            else{
                return "User does not exist, Please register"
            }
        });
    }
}