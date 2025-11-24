import { prisma } from "config/client"
import { hashPassword } from "services/user.service";
import { ACCOUNT_TYPE } from "config/constant";
import { name } from "ejs";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();

    if (countRole === 0) {
        const defaultPassword = await hashPassword("123456");

        await prisma.role.createMany({
            data: [
                {
                    name: "ADMIN",
                    description: "Admin thì full quyền"
                },
                {
                    name: "USER",
                    description: "User thông thường"
                },
            ]
        })
    }
    if (countUser === 0) {
        const defaultPassword = await hashPassword("123456");
        const adminRole = await prisma.role.findFirst({
            where: { name: "Admin" }
        })
        if (adminRole)
            await prisma.user.createMany({
                data: [
                    {
                        fullName: "Tan Phong",
                        username: "tanphong@gmail.com",
                        password: defaultPassword,
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        roleId: adminRole.id
                    },
                    {
                        fullName: "Admin",
                        username: "admin@gmail.com",
                        password: defaultPassword,
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        roleId: adminRole.id
                    },
                ]
            })
    }

    if (countRole !== 0 && countUser !== 0) {
        console.log(">>>Already init data... ");
    }

}
export default initDatabase