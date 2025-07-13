import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import LogInPage from "@/pages/home/LogInPage";
import SignUpPage from "@/pages/home/SignUpPage";
import { PrivateRoute } from "@/shared/lib/auth/PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
