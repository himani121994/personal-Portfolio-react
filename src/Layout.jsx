import { Outlet } from "react-router-dom";
import NavbarPage from "./Navbar";
import Footer from "./Footer";
const Layout = ()=>{
    return(
        <>
        <NavbarPage/>
         <Outlet/>
         <Footer/>
        </>
    )
}
export default Layout;