import {User} from '../models/user.model.js'

export const addUser = async(request,response)=>{
    const {userName, fullName, password, email} = request.body

    if(!userName || !fullName || !password || !email){
        response.status(500).send({message:"Please fill al required fields"})
        return;
    }
     const existedUser = await User.findOne({email:email,userName:userName})
    if(existedUser){
    response.status(400).send({message:"User already exists"})
        return;
   }
    const newUser = await User.create(request.body)
    
    if(!newUser){
        response.status(500).send({message:"User not created"})
        return;
    }
    response.status(201).send({message:"User created successfully",data:newUser})
}

export const getAllUsers = async (request,response)=>{
const users = await User.find()
if(!users){
    response.status(404).send({message:"No users found"})
    return;
}
    response.status(200).send({message:"Users found",data:users})
 
}

export const getSingleUser = async (request,response)=>{
    const {userId} = request.params
    const user = await User.findById(userId)
        if(!user){
            response.status(404).send({message:"User not found"})
            return;
        }
    response.status(200).send({message:"User found",data:user})

}

export const deleteUser = async(request,response)=>{
    const {userId} =request.params
    const user = await User.findByIdAndDelete(userId)
    if(!user){
        response.status(404).send({message:"User not found"})
        return;
    }
    response.status(200).send({message:"User deleted successfully",data:user})
}

export const editUser = async(request,response)=>{
    const {userId} = request.params
    const updateUser = await User.findByIdAndUpdate({_id: userId})
    if(!updateUser){
        response.status(404).send({message:"User not found"})
        return;
    }
    updateUser.set(request.body)
    response.status(200).send({message:"User updated successfully",data:updateUser})
}
