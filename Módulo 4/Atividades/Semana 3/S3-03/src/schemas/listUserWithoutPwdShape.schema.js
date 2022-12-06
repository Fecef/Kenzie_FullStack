import { userWithoutPwdShape } from "./userWithoutPassword.schema";
import * as yup from "yup";

export const listUserWithoutPwdShape = yup.array(userWithoutPwdShape);