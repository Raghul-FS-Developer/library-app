import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Navbar from "./components/navbar";
import Books from "./components/books";
import Login from "./components/login";
import { useState } from "react";
import RegisterConfirm from "./components/registerconfirm";
import Addbook from "./components/addbook";
import Mybooks from "./components/mybook";
import Editbook from "./components/editbook";
import Category from "./components/subcomp/category";
import Comics from "./components/subcomp/comics";
import Politics from "./components/subcomp/politics";
import History from "./components/subcomp/history";
import Home from "./components/home";
import Profile from "./components/subcomp/profile";
import Totalbooks from "./components/subcomp/totalbooks";
import Update from "./components/subcomp/updateprofile";
import Userlist from "./components/subcomp/userlist";
import Findbook from "./components/subcomp/findbook";
import Forgot from "./components/subcomp/forgot";
import Forgotconfirm from "./components/subcomp/forgotconfirm";



function App() {

  const myStorage = window.localStorage;
  const [logged, setLogged] = useState(myStorage.getItem("user"));
  const [findbook,setFindbook] =useState()
 

  return (
    <div>
      <Navbar myStorage={myStorage} logged={logged} setLogged={setLogged} setFindbook={setFindbook}/>
      <Routes>
        <Route path='/' element={<Home  myStorage={myStorage}/>}/>
        {!logged && (
          <>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/confirm/:token" element={<Forgotconfirm/>}/>
        <Route
          path="/login"
          element={<Login myStorage={myStorage} setLogged={setLogged} />}
        />
        <Route path="/register-confirm/:token" element={<RegisterConfirm />} />
        </>
        )}
        {logged && (
          <>
            <Route path="/books" element={<Books />} />
            <Route
              path="/addbook"
              element={<Addbook myStorage={myStorage} />}
            />
            <Route
              path="/mybooks"
              element={<Mybooks myStorage={myStorage} />}
            />
            <Route path="/edit-book/:id" element={<Editbook />} />
            <Route path="/findbook" element={<Findbook findbook={findbook}/>} />
            <Route path="/profile" element={<Profile myStorage={myStorage}/>} />
            <Route path="/userlist" element={<Userlist myStorage={myStorage}/>} />
            <Route path="/update-profile" element={<Update myStorage={myStorage}/>} />
            <Route path="/totalbooks" element={<Totalbooks myStorage={myStorage} />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/comics" element={<Comics />} />
            <Route path="/category/history" element={<History />} />
            <Route path="/category/politics" element={<Politics />} />
           
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
