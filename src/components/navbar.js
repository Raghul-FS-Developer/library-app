import React,{useState} from "react";
import {  useNavigate } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiBookAdd, BiLibrary } from "react-icons/bi";
import URL from '../db'
import axios from "axios";

function Navbar({ logged, myStorage, setLogged ,setFindbook}) {
  let user = myStorage.getItem("user");
  let navigate = useNavigate();

  // search bar
const[title,setTitle]=useState()

const submit =async(e)=>{
  e.preventDefault()
  let res = await axios.get(`${URL}findbook/${title}`)
  setFindbook(res)
  navigate('/findbook')
}

//-->
  let logout = () => {
    myStorage.removeItem("user");
    setLogged(null);
    navigate("/login");
  };
  const handleDeleteuser=async()=>{
   if(user){
     let ok = window.confirm('Do you want to delete the user permanently')
   if(ok){
    let username = user
    let res = await  axios.delete(`${URL}deleteuser/${username}`)
    console.log(res)
    if(res.data.statuscode === 200){
      setLogged(null)
      alert('User Deleted Successfully')
      navigate('/login')
    }
   }
   }else{
     alert('If you want to access this functionality you should login first')
     navigate('/login')
   }
    
  }
  let handleCategory=()=>{
    if(user){
      navigate("/category")
    }else{
      alert('If you want to access this functionality you should login first')
     navigate('/login')
    }
  }
  
  let handleProfile=()=>{
    if(user){
      navigate("/update-profile")
    }else{
      alert('If you want to access this functionality you should login first')
     navigate('/login')
    }
  }
   let numberofbooks=()=>{
    if(user){
      navigate("/totalbooks")
    }else{
      alert('If you want to access this functionality you should login first')
     navigate('/login')
    }
  }
  let handleuser=()=>{
    if(user){
      navigate("/userlist")
    }else{
      alert('If you want to access this functionality you should login first')
     navigate('/login')
    }
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-white ss" to="/">
          <BiLibrary /> Library
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active" >
              <a className="nav-link bts" onClick={()=>navigate('/')}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              {/* Modal  */}

              <button
                type="button"
                className="btn btn-info"
                data-toggle="modal"
                data-target="#about"
              >
                About
              </button>

              <div
                className="modal fade "
                id="about"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog need ">
                  <div className="modal-content needs">
                    <div className="modal-header ">
                      <h5 className="modal-title" id="exampleModalLabel">
                        App functionalities
                      </h5>
                      <button
                        type="button"
                        className="close text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <ul className="list-group">
                      
                        <li className="list-group-item need" 
                        onClick={handleProfile}
                        data-dismiss="modal">
                          <i
                            className="fas fa-clipboard-list text-white"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <FaClipboardList />
                          Update Profile
                          <hr />
                        </li>

                        <li
                          className="list-group-item need "
                          onClick={handleCategory}
                          data-dismiss="modal"
                        >
                          <i
                            className="fas fa-clipboard-list text-white"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <FaClipboardList />
                          category
                          <hr />
                        </li>
                        <li
                          className="list-group-item need "
                          onClick={handleuser}
                          data-dismiss="modal"
                        >
                          <i
                            className="fas fa-clipboard-list text-white"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <FaClipboardList />
                          List of user
                          <hr />
                        </li>
                        

                         <li className="list-group-item need" onClick={numberofbooks} data-dismiss="modal">
                          <i
                            className="fas fa-clipboard-list text-white"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <FaClipboardList />
                          Total Number of Books
                          <hr />
                        </li> 
                        <li className="list-group-item need" onClick={handleDeleteuser }data-dismiss="modal"> 
                          <i
                            className="fas fa-clipboard-list text-white"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <FaClipboardList />
                          Delete User
                          <hr />
                        </li>
                      </ul>
                    </div>
                    <div className="modal-footer ">
                      <a
                        className="mr-5 text-white"
                        href="https://github.com/Raghul-FS-Developer"
                        target="_"
                      >
                        DevelopedBy:R.Raghul
                      </a>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* List menu items */}
            {logged && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link bts"
                    onClick={() => navigate("/books")}
                  >
                    Books
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link bts"
                    onClick={() => navigate("/addbook")}
                  >
                    Add book
                  </a>
                </li>
              </>
            )}
            {/* Login Register */}
            {!logged && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link bts"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link bts"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </a>
                </li>
              </>
            )}
            {/* Drop dowm */}
            {logged && (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    data-toggle="dropdown"
                    href="/"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {user}
                  </a>
                  <div className="dropdown-menu bg-info text-white" >
                    <a className="dropdown-item ss" onClick={()=>navigate('/profile')}>
                      <CgProfile />
                      &nbsp;MyProfile
                    </a>
                    <a
                      className="dropdown-item ss"
                      onClick={() => navigate('/mybooks')}
                    >
                      <BiBookAdd />
                      &nbsp;MyBooks
                    </a>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item logout" onClick={logout}>
                      Logout
                    </button>
                  </div>
                </li>
              </>
            )}
          </ul>
          {logged && (
          <form className="form-inline my-2 my-lg-0" onSubmit={submit}>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Find Book..."
              onChange={(e)=>setTitle(e.target.value)}
            />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
