import { Request, Response } from "express";
import { countTotalProductPages, getProductList } from "services/admin/product.service";
import { getAllUsers } from "services/user.service";

const getDashboardPage = async (req: Request, res: Response) => {
    return res.render("admin/dashboard/show.ejs")
}
const getAdminUserPage = async (req: Request, res: Response) => {
    const users = await getAllUsers();

    return res.render("admin/user/show.ejs", {
        users: users
    });
}
const getAdminProductPage = async (req: Request, res: Response) => {
    const { page } = req.query;
    let currentPage = page ? +page : 1;
    if (currentPage <= 0) currentPage = 1;
    const products = await getProductList(currentPage);
    const totalPages = await countTotalProductPages();
    return res.render("admin/product/show.ejs", { products, totalPages: +totalPages, page: +currentPage });
}
const getAdminOrderPage = async (req: Request, res: Response) => {

    return res.render("admin/order/show.ejs")
}
export { getAdminUserPage, getDashboardPage, getAdminProductPage, getAdminOrderPage } 