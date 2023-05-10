import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProductPage } from "../pages/ProductPage";
import { ProfileViewPage } from "../pages/ProfileViewPage";
import { LoginPage } from "../pages/LoginPage";
import { PasswordRecoveryPage } from "../pages/PasswordRecoveryPage";
import { EmailSubmissionPage } from "../pages/EmailSubmissionPage";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/profile/:id" element={<ProfileViewPage />} />
        <Route path="/passwordRecovery" element={<EmailSubmissionPage />} />
        <Route
          path="/passwordRecovery/:resetToken"
          element={<PasswordRecoveryPage />}
        />
      </Routes>
    </>
  );
};
