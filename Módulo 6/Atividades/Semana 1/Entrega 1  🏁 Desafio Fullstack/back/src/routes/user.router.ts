import { Router } from "express";

import * as controller from "../controllers"
import * as middleware from "../middlewares"
import * as serializer from "../serializers"

export const userRouter = Router();

userRouter.post("",
    middleware.validateSchemaMiddleware(serializer.createUserRequestShape),
    middleware.validateDuplicateEmailMiddleware,
    controller.createUserController
);
userRouter.get("",
    controller.listUserController
);
userRouter.get("/retrieve",
    middleware.validateTokenMiddleware,
    middleware.validateIfUserExistsMiddleware,
    controller.retrieveUserController
);
userRouter.patch("",
    middleware.validateTokenMiddleware,
    middleware.validateSchemaMiddleware(serializer.updateUserRequestShape),
    middleware.validateIfUserExistsMiddleware,
    controller.updateUserController
);
userRouter.delete("",
    middleware.validateTokenMiddleware,
    middleware.validateIfUserExistsMiddleware,
    controller.deleteUserController
);


userRouter.post("/contact",
    middleware.validateTokenMiddleware,
    middleware.validateSchemaMiddleware(serializer.createContactRequestShape),
    middleware.validateIfUserExistsMiddleware,
    controller.createContactController
);
userRouter.get("/contact",
    middleware.validateTokenMiddleware,
    middleware.validateIfUserExistsMiddleware,
    controller.listContactController
);
userRouter.get("/contact/:id",
    middleware.validateTokenMiddleware,
    middleware.validateIfUserExistsMiddleware,
    middleware.validateIfContactExistsMiddleware,
    controller.retrieveContactController
);
userRouter.patch("/contact/:id",
    middleware.validateTokenMiddleware,
    middleware.validateIfUserExistsMiddleware,
    middleware.validateIfContactExistsMiddleware,
    controller.updateContactController
);
userRouter.delete("/contact/:id",
    middleware.validateTokenMiddleware,
    middleware.validateIfUserExistsMiddleware,
    middleware.validateIfContactExistsMiddleware,
    controller.deleteContactController
);