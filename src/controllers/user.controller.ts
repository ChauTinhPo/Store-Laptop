import { Request, Response } from "express";
import { getAllRoles, getAllUsers, getUserById, handleCreateUser, hanldeDeleteUser, updateUserById } from "services/user.service";
const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.render("home", {
        users: users
    })
}
const getCreateUserPage = async (req: Request, res: Response) => {
    const roles = await getAllRoles();
    res.render("admin/user/create.ejs",
        { roles }
    )
}
const postCreateUser = async (req: Request, res: Response) => {

    const { fullname, username, phone, role, address } = req.body;
    // const a = await handleCreateUser(fullname, email, address)
    return res.redirect("/")
}
const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const a = await hanldeDeleteUser(id);
    return res.redirect("/")
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.render("view-user.ejs",
        {
            id: id,
            user: user
        }
    )

}
const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address, fullname } = req.body;
    const a = await updateUserById(id, email, address, fullname);
    return res.redirect("/")
}


export { getHomePage, postUpdateUser, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser };