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

    const { fullName, username, phone, role, address } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? null;
    await handleCreateUser(fullName, username, address, phone, avatar, role)
    return res.redirect("/admin/user")
}
const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const a = await hanldeDeleteUser(id);
    return res.redirect("/admin/user")
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    const roles = await getAllRoles();
    return res.render("admin/user/detail.ejs",
        {
            id: id,
            user: user,
            roles
        }
    )

}
const postUpdateUser = async (req: Request, res: Response) => {
    const { id, fullName, phone, role, address } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? null;
    await updateUserById(id, fullName, phone, role, address, avatar);
    return res.redirect("/admin/user")
}


export { getHomePage, postUpdateUser, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser };