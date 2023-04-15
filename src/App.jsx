import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Admin from "./pages/Admin";
import EditFacility from "./pages/EditFacility";
import EditSample from "./pages/EditSample";
import ErrorPage from "./pages/ErrorPage";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Maps from "./pages/Maps";
import Redirect from "./pages/Redirect";
import RegistFacility from "./pages/RegistFacility";
import RegistSample from "./pages/RegistSample";
import Report from "./pages/Report";
import FacilityList from "./pages/FacilityList";
import SampleList from "./pages/SampleList";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  //collapse sidebar function that will be passed and triggered in child component, basically readjust the grid layout on main page (parent)
  const [collapse, setCollapse] = useState('sidebar-expand')
  const changeLayout = (collapseState) => {
    setCollapse(collapseState)
  }
  return (
    <>
    <BrowserRouter>
    <section className={`md:grid ${collapse} m-5 gap-4 grid-rows-size`}>
      <div className="col-span-1 row-span-3"><Sidebar layout={changeLayout}/></div>
      <section className="col-start-2 col-span-4 row-span-full">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/report" element={<Report/>}></Route>
          <Route path="/map" element={<Maps/>}></Route>
          <Route path="/sign-in" element={<Login/>}></Route>
          <Route path="/add-facility" element={<PrivateRoute/>}>
            <Route path="/add-facility" element={<RegistFacility/>}/>
          </Route>
          <Route path="/edit-facility/:id" element={<PrivateRoute/>}>
            <Route path="/edit-facility/:id" element={<EditFacility/>}/>
          </Route>
          <Route path="/list-facility" element={<PrivateRoute/>}>
            <Route path="/list-facility" element={<FacilityList/>}/>
          </Route>
          <Route path="/add-sample" element={<PrivateRoute/>}>
            <Route path="/add-sample" element={<RegistSample/>}/>
          </Route>
          <Route path="/edit-sample/:id" element={<PrivateRoute/>}>
            <Route path="/edit-sample/:id" element={<EditSample/>}/>
          </Route>
          <Route path="/list-sample" element={<PrivateRoute/>}>
            <Route path="/list-sample" element={<SampleList/>}/>
          </Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/help" element={<Help/>}></Route>
          <Route path="/redirect" element={<Redirect/>}></Route>
          <Route path="/error" element={<ErrorPage/>}></Route>
        </Routes>
      </section>
    </section>
    </BrowserRouter>
    <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
