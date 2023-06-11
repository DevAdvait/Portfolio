import { Outlet } from "react-router-dom";
import CustomNavbar from "./Navbar";
import ContactSection from "./ContactSection";

export default function Layout () {

    return(
        <main>
            <header>
                <CustomNavbar/>
            </header>
            <Outlet/>
            <footer>
                <ContactSection/>
            </footer>
        </main>
    )
}