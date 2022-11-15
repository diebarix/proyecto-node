import {Router} from 'express';

const userRouter = Router()

userRouter.post("/register", )
userRouter.post("/login", )
userRouter.get("/profile", )
userRouter.patch("/update-name", )
userRouter.patch("/update-email", )
userRouter.patch("/update-password", )
userRouter.delete("/delete", )

export default userRouter