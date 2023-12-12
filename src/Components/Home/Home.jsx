import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experient/Experience";

import Project from "../Project/Project";
import Header from "./Header";


const Home = () => {
    return (
        <div className="">
           
            <Header></Header>
            <About></About>
            <Project></Project>
            <Experience></Experience>
             <Contact></Contact>
        </div>
    );
};

export default Home;