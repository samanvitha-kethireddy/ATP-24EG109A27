import {Schema,model } from 'mongoose'

//create cart schema{product,count}
const cartSchema = new Schema({
    product:{
      type:Schema.Types.ObjectId,
      ref:"prod" //name of prod model
    },
    count:{
        type:Number,
        default:1
    }
})
//create user schema
const userSchema = new Schema({
    //structure of user resource
    username:{
        type:String,
        required: [true,"username required"],
        minLength : [4,"min 4 chars needed"],
        maxLength:[6,"max 6 chars"],
    },
    password:{
        type: String,
        required:[true, "password required"],
    },
    email:{
        type: String,
        required:[true, "email required"],
        unique: [true, "email already exists"]  //unique not a validator. its a option
    },
    age:{
        type: Number,
    },
   cart:[cartSchema], 
},
    {
        versionKey:false,
        timestamps:true,
    },);

//generate userModel
export const UserModel = model("user",userSchema)