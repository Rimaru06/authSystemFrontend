import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassoword";
import ResetPassword from "../pages/ResetPassword";
import DashBoard from "../pages/DashBoard";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DashBoard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/reset-password/:token" element={<ResetPassword/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;