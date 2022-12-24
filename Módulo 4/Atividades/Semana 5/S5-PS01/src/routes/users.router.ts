import { Router } from "express";
import { createUserShape, updateUserShape } from "../serializers";
import { validadeUpdateFieldsMiddleware, validateAdmMiddleware, validateDuplicateEmailMiddleware, validateIfActiveMiddleware, validateIfUserExistsMiddleware, validateSchemaMiddleware, validateTokenMiddleware, validateUpdatePermissionMiddlweare } from "../middlewares";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers";

const userRouter = Router();

userRouter.post("",
    validateSchemaMiddleware(createUserShape),
    validateDuplicateEmailMiddleware,
    createUserController
);
userRouter.get("",
    validateTokenMiddleware,
    validateAdmMiddleware,
    listUsersController
);
userRouter.patch("/:id",
    validateTokenMiddleware,
    validadeUpdateFieldsMiddleware,
    validateSchemaMiddleware(updateUserShape),
    validateUpdatePermissionMiddlweare,
    validateIfUserExistsMiddleware,
    updateUserController
);
userRouter.delete("/:id",
    validateTokenMiddleware,
    validateAdmMiddleware,
    validateIfUserExistsMiddleware,
    validateIfActiveMiddleware,
    deleteUserController
);

export default userRouter;