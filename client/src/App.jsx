import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { AuthProvider } from "./Context/authContext";
import Homepages from "./Pages/Homepages";
import Taskspage from "./Pages/Taskspage";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import SpinnerLoading from "./Components/SpinnerLoading";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/spinner" element={<SpinnerLoading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/tasks" element={<Taskspage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
