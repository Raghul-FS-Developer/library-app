import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
  const logged = myStorage.getItem("user");
  const [findbook,setFindbook] =useState()
 
console.log(logged)
  return (
    <div>
      <Navbar myStorage={myStorage} logged={logged}  setFindbook={setFindbook}/>
      <Routes>
        <Route path='/' element={logged ? <Home  myStorage={myStorage}/> : <Navigate to = "/login"/> }/>
       
         
        <Route path="/register" element={logged ? <Navigate to = "/"/>: <Register />} />
        <Route path="/forgot" element={logged ?<Navigate to = "/"/>:<Forgot/>}/>
        <Route path="/confirm/:token" element={logged ?<Navigate to = "/"/>:<Forgotconfirm/>}/>
        <Route
          path="/login"
          element={logged? <Navigate to = "/"/>:<Login logged={logged} myStorage={myStorage} />}
        />
        <Route path="/register-confirm/:token" element={logged? <Navigate to = "/"/>:<RegisterConfirm />} />
    
       
        
            <Route path="/books" element={logged?<Books />:<Navigate to = "/login"/>} />
            <Route
              path="/addbook"
              element={logged?<Addbook myStorage={myStorage} />:<Navigate to = "/login"/>}
            />
            <Route
              path="/mybooks"
              element={logged?<Mybooks myStorage={myStorage}/>:<Navigate to = "/login"/>}
            />
            <Route path="/edit-book/:id" element={logged?<Editbook />:<Navigate to = "/login"/>} />
            <Route path="/findbook" element={logged?<Findbook findbook={findbook}/>:<Navigate to = "/login"/>} />
            <Route path="/profile" element={logged?<Profile myStorage={myStorage}/>:<Navigate to = "/login"/>} />
            <Route path="/userlist" element={logged?<Userlist myStorage={myStorage}/>:<Navigate to = "/login"/>} />
            <Route path="/update-profile" element={logged?<Update myStorage={myStorage}/>:<Navigate to = "/login"/>} />
            <Route path="/totalbooks" element={logged?<Totalbooks myStorage={myStorage} />:<Navigate to = "/login"/>} />
            <Route path="/category" element={logged?<Category />:<Navigate to = "/login"/>} />
            <Route path="/category/comics" element={logged?<Comics />:<Navigate to = "/login"/>} />
            <Route path="/category/history" element={logged?<History />:<Navigate to = "/login"/>} />
            <Route path="/category/politics" element={logged?<Politics />:<Navigate to = "/login"/>} />
           
        
      </Routes>
    </div>
  );
}

export default App;
