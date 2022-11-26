import { toast } from "react-toastify";

export const successToast = (message: string) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 1500,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  });

export const warningToast = (message: string) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 1500,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  });
