import Typewriter from 'typewriter-effect';
import { IoDownloadOutline } from "react-icons/io5";
import ParticleBg from '../ParticleBg/ParticleBg';

const Header = () => {
    return (
        <div className='bg-black'>
            <div className='lg:w-[1200px] mx-auto'>
                <section className="header bg-gradient-to-b from-black-500 via-black-400 to-black-300 min-h-screen flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2">
                                <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">
                                    Hi, I’m <br /> Maimun Islam
                                </h1>
                                <h3 className="text-xl md:text-2xl text-red-600 mb-4">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Front End Developer",
                                                "React Developer",
                                                "Wordpress Expert",
                                                "Programmer"
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h3>
                                <p className="text-white pr-0 md:pr-8 mb-4 md:w-3/4">
                                    A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.
                                </p>
                                <a href="#">
                                    <button className='btn btn-danger'><IoDownloadOutline /> Resume</button>
                                </a>
                            </div>
                            <div className="md:w-full mt-6 md:mt-0">
                                <img src="https://i.ibb.co/TrWshxx/5855046-1-prev-ui.png" alt="Developer" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </section>
                <ParticleBg></ParticleBg>
            </div>
        </div>
    );
};

export default Header;
