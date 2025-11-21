import express, { Express } from 'express'
import { getCreateUserPage, getHomePage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser } from '../controllers/user.controller';
import { getAdminOrderPage, getAdminProductPage, getAdminUserPage, getDashboardPage } from 'controllers/admin/dashboard.controller';
const router = express.Router();
const WebRoutes = (app: Express) => {
    router.get('/', getHomePage);
    router.post('/handle-delete-user/:id', postDeleteUser);
    router.get('/handle-view-user/:id', getViewUser);
    router.post('/handle-update-user', postUpdateUser);

    //admin
    router.get("/admin", getDashboardPage);
    router.get("/admin/user", getAdminUserPage);
    router.get('/admin/create-user', getCreateUserPage);
    router.post('/admin/handle-create-user', postCreateUser);


    router.get("/admin/product", getAdminProductPage);
    router.get("/admin/order", getAdminOrderPage);

    app.use("/", router);
}
export default WebRoutes;