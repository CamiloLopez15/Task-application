import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { AuthProvider } from "./Context/authContext";
import Homepages from "./Pages/Homepages";
import Taskspage from "./Pages/Taskspage";
import TasksFormPage from "./Pages/TasksFormPage";
import ProfilePage from "./Pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Pages/Register";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/tasks" element={<Taskspage />} />
            <Route path="/add-task" element={<TasksFormPage />} />
            <Route path="/tasks/:id" element={<TasksFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
