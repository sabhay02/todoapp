import { Route,Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import About from "./pages/About/About";
import TodoList from "./pages/Todos/TodoList";
import {Toaster} from "react-hot-toast";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Landing />}/>
                <Route path="/home" element={<HomePage />}/>
         <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/todolist" element={<TodoList />}/>

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
