import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

import InstructorPage from "./pages/Instructor";
import Quiz from "./components/Instructor/Quiz";
import Result from "./components/Instructor/Result";
import LiveQuizPage from "./pages/LiveQuiz";

import QuizResultPage from "./pages/QuizResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "instructor", element: <InstructorPage /> },
      { path: "instructor/quiz", element: <Quiz /> },
      { path: "instructor/result", element: <Result /> },
      {
        path: "liveQuiz/:categoryName/:id/:totalQuestions",
        element: <LiveQuizPage />,
      },
      {
        path: "liveQuiz/result",
        element: <QuizResultPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
