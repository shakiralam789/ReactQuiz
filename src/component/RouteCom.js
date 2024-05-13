import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SingUp from "./pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function RouteCom({ Routes, Route }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/sign-up" element={<PublicRoute />}>
          <Route path="/sign-up" element={<SingUp />} />
        </Route>

        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/home" name="home" element={<Home />} />

        <Route path="/quiz" element={<PrivateRoute />}>
          <Route path="/quiz/:id" element={<Quiz />} />
        </Route>
        <Route path="/result" element={<PrivateRoute />}>
          <Route path="/result/:id" element={<Result />} />
        </Route>
      </Route>
    </Routes>
  );
}
