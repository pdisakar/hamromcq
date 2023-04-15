import './App.css';
import Navbar from './components/navbar/Navbar';
import RegisterPage from './components/authentication/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import QuestionBankPage from './components/pages/QuestionBankPage';
import HallPage from './components/pages/HallPage';
import ExamPage from './components/pages/ExamPage';
import ContactUsPage from './components/pages/ContactUsPage';
import LoginPage from './components/authentication/LoginPage';
import TermsAndCondition from './components/pages/TermsAndCondition';
import { AuthContextProvider } from './context/AuthContext';
import IndexPage from './components/indexpages/IndexPage';

function App() {
  return (
    <AuthContextProvider>
      <div className="main">
        <Navbar />
        <div className="pages-container">
          <Routes>
            <Route
              exact
              path="/"
              element={<HomePage />}
            />
            <Route
              exact
              path="/question-bank"
              element={<QuestionBankPage />}
            />
            <Route
              exact
              path="/halls"
              element={<HallPage />}
            />
            <Route
              exact
              path="/exam"
              element={<ExamPage />}
            />
            <Route
              exact
              path="/contact-us"
              element={<ContactUsPage />}
            />
            <Route
              exact
              path="/get-start"
              element={<LoginPage />}
            />
            <Route
              exact
              path="/register-page"
              element={<RegisterPage />}
            />

            <Route
              exact
              path="/terms-and-conditions"
              element={<TermsAndCondition />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/get-index"
              element={<IndexPage />}
            />
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
