import { prisma } from "config/client";
import getConnection from "../config/database"

const handleCreateUser = async (
    fullname: string,
    email: string,
    address: string
) => {

    const newUser = await prisma.user.create({
        data: {
            name: fullname,
            email: email,
            address: address
        }
    })
    return newUser;
}

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}
const hanldeDeleteUser = async (id: string) => {
   const result = await prisma.user.delete({
       where:{id:+id}
   })
    return result;
}
const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({ where: { id: +id } });
    return user;
}
const updateUserById = async (id: string, email: string, address: string, fullname: string) => {
    const updateUser = await prisma.user.update({
        where: { id: +id },
        data: {
            name: fullname,
            email: email,
            address: address
        }
    })
    return updateUser;
}



export { handleCreateUser, updateUserById, getAllUsers, hanldeDeleteUser, getUserById }  