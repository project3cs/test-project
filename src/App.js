// importing react-router
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// my compoenents
import Home from "./layouts/home/home.layout";
import Users from "./layouts/users/users.layout";
import UserDetails from "./components/user-details/user-details.component";

// styles
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Users />} />
      <Route path="users/:userID" element={<UserDetails />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
