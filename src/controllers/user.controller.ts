import { Request, Response } from "express";
import { getAllUsers, getUserById, handleCreateUser, hanldeDeleteUser, updateUserById } from "services/user.service";
const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.render("home", {
        users: users
    })
}
const getCreateUserPage = (req: Request, res: Response) => {
    res.render("create-user")
}
const postCreateUser = async (req: Request, res: Response) => {

    const { fullname, email, address } = req.body;
    const a = await handleCreateUser(fullname, email, address)
    return res.redirect("/")
}
const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const a= await hanldeDeleteUser(id);
    return res.redirect("/")
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.render("view-user.ejs",
        {
            id: id ,
            user:user
        }
    )

}
const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address,fullname } = req.body;
    const a = await updateUserById(id, email, address, fullname);
    return res.redirect("/")
}


export { getHomePage, postUpdateUser,getCreateUserPage, postCreateUser, postDeleteUser, getViewUser };