import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";
import Header from "./Header";


const Home = () => {
    return (
        <div className="">
            <h2>This is Home Page</h2>
            <Header></Header>
            <About></About>
            <Project></Project>
             <Contact></Contact>
        </div>
    );
};

export default Home;