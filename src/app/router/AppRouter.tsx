import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/home/HomePage';
import LogInPage from '@/pages/home/LogInPage';
import SignUpPage from '@/pages/home/SignUpPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
