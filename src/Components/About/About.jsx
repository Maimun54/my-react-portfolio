
import { FaGenderless } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[#191919] text-white">

<div className="max-w-[1200px] mx-auto p-4">
            <div className="lg:flex items-center">
                <div className="lg:w-1/2">
                    <img className="lg:w-full " src="https://i.ibb.co/rHnDjF5/DSC2630-copy-1.png" alt="" />
                </div>
                <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
                    <h2 className="text-3xl text-white font-bold mb-5"><span className=" underline">About</span> me</h2>
                    <p className="py-2 text-white lg:w-full text-xl">
                        As a MERN-stack web developer, my expertise lies in crafting dynamic applications using React, Node.js, and MongoDB. Beyond the realm of full-stack development, I've honed my skills in building static websites with HTML5, CSS3, and JavaScript (ES6). With a penchant for swift learning, I embrace challenges with a strong work ethic and efficiency. Committed to staying abreast of emerging technologies, my ultimate aim is to evolve into a world-class professional web developer.
                    </p>
                    <h4 className="text-xl text-white py-2 font-semibold">
                        Recently worked with these technologies:
                    </h4>
                    <div className="text-xl">
                        <h3 className="text-2xl font-bold">Frontend</h3>
                        <ul className="flex flex-wrap gap-5">
                            <li className="flex items-center"><FaGenderless />JavaScript (ES6)</li>
                            <li className="flex items-center"><FaGenderless />React.js</li>
                            <li className="flex items-center"><FaGenderless />HTML5</li>
                            <li className="flex items-center"><FaGenderless />CSS3</li>
                            <li className="flex items-center"><FaGenderless />Tailwind</li>
                        </ul>
                    </div>
                    <div className="text-xl">
                        <h3 className="text-2xl font-bold">Backend</h3>
                        <ul className="flex flex-wrap gap-5">
                            <li className="flex items-center"><FaGenderless />Node js</li>
                            <li className="flex items-center"><FaGenderless />Express js</li>
                            <li className="flex items-center"><FaGenderless />MongoDB</li>
                        </ul>
                    </div>
                    <div className="text-xl">
                        <h3 className="text-2xl font-bold">Tools</h3>
                        <ul className="flex flex-wrap gap-5">
                            <li className="flex items-center"><FaGenderless />Vs Code</li>
                            <li className="flex items-center"><FaGenderless />Git</li>
                            <li className="flex items-center"><FaGenderless />Firebase</li>
                            <li className="flex items-center"><FaGenderless />Vercel</li>
                            <li className="flex items-center"><FaGenderless />Netlify</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default About;
