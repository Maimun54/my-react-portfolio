import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experient/Experience";
import Preloader from "../Preloader/Preloader";


import Project from "../Project/Project";
import Header from "./Header";


const Home = () => {
    return (
        <div className="">
            
            <Header particleBg={true}></Header>
             
            <About className="bg-black"></About>
            <Project></Project>
            <Experience></Experience>
             <Contact></Contact>
            
        </div>
    );
};

export default Home;